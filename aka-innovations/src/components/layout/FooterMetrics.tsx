"use client";

import React, { useState, useEffect } from "react";
import { Users, Eye } from "lucide-react";
import { motion } from "framer-motion";

export function FooterMetrics() {
    const [liveUsers, setLiveUsers] = useState<number | null>(null);
    const [totalVisits, setTotalVisits] = useState<number | null>(null);

    useEffect(() => {
        // 1. Get or create a session ID for this browser tab
        let sessionId = sessionStorage.getItem("aka_session_id");
        if (!sessionId) {
            sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            sessionStorage.setItem("aka_session_id", sessionId);
        }

        const fetchMetrics = async () => {
            try {
                // We use POST to send a "heartbeat" which updates our 'last seen' timestamp
                // and returns the fresh counts.
                const res = await fetch("/api/metrics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ sessionId }),
                });
                if (res.ok) {
                    const data = await res.json();
                    setLiveUsers(data.liveUsers);
                    setTotalVisits(data.totalVisits);
                }
            } catch (error) {
                console.error("Failed to fetch metrics", error);
            }
        };

        // Initial fetch
        fetchMetrics();

        // Poll every 10 seconds to keep "Live" count updated and send heartbeat
        const interval = setInterval(fetchMetrics, 10000);

        return () => clearInterval(interval);
    }, []);

    // Show loading state or defaults until data loads
    if (totalVisits === null) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-6 border-t border-gray-200 mt-8">
            {/* Live Users Metric */}
            <div className="flex items-center gap-2 text-gray-600">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                    <Users className="w-4 h-4" />
                    <span className="tabular-nums">{liveUsers}</span>
                    <span className="text-sm">Live Now</span>
                </div>
            </div>

            {/* Vertical Divider (Hidden on small screens) */}
            <div className="hidden md:block h-4 w-px bg-gray-300"></div>

            {/* Total Visits Metric */}
            <div className="flex items-center gap-2 text-gray-600 font-medium">
                <Eye className="w-4 h-4" />
                <span className="tabular-nums">
                    {totalVisits.toLocaleString()}
                </span>
                <span className="text-sm">Total Visits</span>
            </div>
        </div>
    );
}
