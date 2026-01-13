import { NextResponse } from 'next/server';
import { updateMetrics, getMetrics } from '@/lib/metrics';

export async function POST(request: Request) {
    try {
        const { sessionId } = await request.json();

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
        }

        const metrics = updateMetrics(sessionId);
        return NextResponse.json(metrics);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update metrics' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const metrics = getMetrics();
        return NextResponse.json(metrics);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
    }
}
