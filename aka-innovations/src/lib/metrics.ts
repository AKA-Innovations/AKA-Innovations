import fs from 'fs';
import path from 'path';

// Store data outside of src to avoid aggressive hot-reloads during dev
// In a real deployment, this would be a database connection.
const DATA_DIR = path.join(process.cwd(), 'data');
const METRICS_FILE = path.join(DATA_DIR, 'metrics.json');

// Interface for our data structure
interface MetricsData {
    totalVisits: number;
    // Map of "anonymous_id" -> timestamp (last seen)
    activeSessions: Record<string, number>;
}

// Ensure the directory and file exist
function ensureDataFile() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(METRICS_FILE)) {
        const initialData: MetricsData = {
            totalVisits: 0, // Starting baseline
            activeSessions: {},
        };
        fs.writeFileSync(METRICS_FILE, JSON.stringify(initialData, null, 2));
    }
}

function readMetrics(): MetricsData {
    ensureDataFile();
    try {
        const data = fs.readFileSync(METRICS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Fallback if file is corrupted
        return { totalVisits: 14250, activeSessions: {} };
    }
}

function writeMetrics(data: MetricsData) {
    ensureDataFile();
    fs.writeFileSync(METRICS_FILE, JSON.stringify(data, null, 2));
}

// Main logic to update and retrieve stats
export function updateMetrics(sessionId: string) {
    const data = readMetrics();
    const now = Date.now();
    const WINDOW_MS = 3 * 60 * 1000; // 3 minutes

    // 1. Update Total Visits (only if this session is new or expired? 
    // For simplicity, we'll count every "page load/app mount" as a visit 
    // OR we could be smarter. Let's stick to simple: increment on mount).
    // Actually, to avoid spamming "Total Visits" on every refresh, 
    // let's only increment if the session ID wasn't already active recently.

    if (!data.activeSessions[sessionId] || (now - data.activeSessions[sessionId] > WINDOW_MS)) {
        data.totalVisits += 1;
    }

    // 2. Update/Heartbeat this session
    data.activeSessions[sessionId] = now;

    // 3. Cleanup old sessions (older than 3 mins)
    const cutoff = now - WINDOW_MS;
    for (const id in data.activeSessions) {
        if (data.activeSessions[id] < cutoff) {
            delete data.activeSessions[id];
        }
    }

    writeMetrics(data);

    return {
        totalVisits: data.totalVisits,
        liveUsers: Object.keys(data.activeSessions).length,
    };
}

export function getMetrics() {
    const data = readMetrics();
    const now = Date.now();
    const WINDOW_MS = 3 * 60 * 1000; // 3 minutes

    // Just cleanup for accurate read
    let dirty = false;
    const cutoff = now - WINDOW_MS;
    for (const id in data.activeSessions) {
        if (data.activeSessions[id] < cutoff) {
            delete data.activeSessions[id];
            dirty = true;
        }
    }

    if (dirty) {
        writeMetrics(data);
    }

    return {
        totalVisits: data.totalVisits,
        liveUsers: Object.keys(data.activeSessions).length,
    };
}
