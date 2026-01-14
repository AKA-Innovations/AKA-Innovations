import fs from 'fs';
import path from 'path';

// In-memory fallback for Vercel/Serverless where FS is read-only
let memoryMetrics: MetricsData = {
    totalVisits: 14250,
    activeSessions: {},
};

// Interface for our data structure
interface MetricsData {
    totalVisits: number;
    activeSessions: Record<string, number>;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const METRICS_FILE = path.join(DATA_DIR, 'metrics.json');

// Helper to reliably read metrics (FS -> Memory -> Default)
function readMetrics(): MetricsData {
    // 1. Try Memory first (fastest)
    if (Object.keys(memoryMetrics.activeSessions).length > 0 || memoryMetrics.totalVisits > 14250) {
        return memoryMetrics;
    }

    // 2. Try File System (Persistence)
    try {
        if (fs.existsSync(METRICS_FILE)) {
            const data = fs.readFileSync(METRICS_FILE, 'utf-8');
            const parsed = JSON.parse(data);
            memoryMetrics = parsed; // Sync memory
            return parsed;
        }
    } catch (error) {
        // Ignore FS errors
    }

    // 3. Fallback
    return memoryMetrics;
}

// Helper to reliably write metrics
function writeMetrics(data: MetricsData) {
    // 1. Update Memory
    memoryMetrics = data;

    // 2. Try FS (will fail on Vercel, which is fine now)
    try {
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        fs.writeFileSync(METRICS_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.warn("Could not write metrics to disk (expected on Vercel). Using in-memory.");
    }
}

// Main logic to update and retrieve stats
export function updateMetrics(sessionId: string) {
    const data = readMetrics();
    const now = Date.now();
    const WINDOW_MS = 3 * 60 * 1000; // 3 minutes

    if (!data.activeSessions[sessionId] || (now - data.activeSessions[sessionId] > WINDOW_MS)) {
        data.totalVisits += 1;
    }

    data.activeSessions[sessionId] = now;

    // Cleanup
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
    const WINDOW_MS = 3 * 60 * 1000;

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
