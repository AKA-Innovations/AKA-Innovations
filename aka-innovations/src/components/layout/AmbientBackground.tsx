"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f8f9fa] pointer-events-none">
            {/* 
        This global background ensures a seamless flow between sections.
        The base color is a very light/soft gray #f8f9fa to keep it clean.
      */}

            {/* Top Left - Soft Indigo/Purple */}
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-indigo-200/30 blur-[100px]"
            />

            {/* Top Right - Cyan/Blue */}
            <motion.div
                animate={{
                    x: [20, -20, 20],
                    y: [20, -20, 20],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-200/30 blur-[120px]"
            />

            {/* Bottom Left - Pink/Rose */}
            <motion.div
                animate={{
                    x: [-30, 30, -30],
                    y: [-30, 30, -30],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] -left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-pink-200/20 blur-[110px]"
            />

            {/* Bottom Right - Blue/Violet */}
            <motion.div
                animate={{
                    x: [30, -30, 30],
                    y: [30, -30, 30],
                }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-[10%] -right-[5%] w-[55vw] h-[55vw] max-w-[900px] max-h-[900px] rounded-full bg-blue-200/20 blur-[130px]"
            />
        </div>
    );
}
