"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export const PageTransition = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1], // smooth, not robotic
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
