"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LegalBinderProps {
    title: string;
    lastUpdated: string;
    pages: React.ReactNode[];
}

export function LegalBinder({ title, lastUpdated, pages }: LegalBinderProps) {
    const [currentPage, setCurrentPage] = useState(0);

    const turnNext = () => {
        if (currentPage < pages.length - 1) setCurrentPage((p) => p + 1);
    };

    const turnPrev = () => {
        if (currentPage > 0) setCurrentPage((p) => p - 1);
    };

    return (
        <section className="w-full min-h-screen bg-[#e6e8eb] flex flex-col items-center justify-center py-16 px-4">

            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-widest uppercase">
                    {title}
                </h1>
                <p className="text-xs md:text-sm font-serif text-gray-500 mt-2 uppercase">
                    Last Updated: {lastUpdated}
                </p>
            </div>

            {/* Binder Wrapper */}
            <div className="relative w-full max-w-5xl mx-auto flex justify-center">

                {/* Book Spine (desktop visual only) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 bg-gray-800/20 rounded-l-sm transform -translate-x-1/2 z-0" />

                {/* Page Container */}
                <div className="relative w-full bg-transparent z-10">

                    {/* Page Card (FULL WIDTH + HEIGHT) */}
                    <div className="relative w-full h-[70vh] md:h-[75vh] bg-white shadow-2xl border border-gray-200 rounded-sm overflow-hidden">

                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ rotateY: 80, opacity: 0, transformOrigin: "left" }}
                                animate={{
                                    rotateY: 0,
                                    opacity: 1,
                                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                }}
                                exit={{
                                    rotateY: -80,
                                    opacity: 0,
                                    transformOrigin: "left",
                                    transition: { duration: 0.4, ease: "easeIn" },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="absolute inset-0 bg-white"
                            >
                                {/* Page Content — NO SCROLL */}
                                <div className="absolute inset-0 p-5 sm:p-8 md:p-12 flex flex-col">

                                    {/* Page Header */}
                                    <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-5">
                                        <span className="text-[10px] sm:text-xs font-serif font-bold tracking-widest text-gray-400">
                                            {title.toUpperCase()}
                                        </span>
                                        <span className="text-[10px] sm:text-xs font-serif font-bold tracking-widest text-gray-400">
                                            PAGE {currentPage + 1} OF {pages.length}
                                        </span>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 prose prose-sm sm:prose-base prose-slate font-serif text-justify leading-relaxed text-gray-800 max-w-none">
                                        {pages[currentPage]}
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                                        <span className="text-[10px] text-gray-400 font-serif uppercase">
                                            Confidential
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Click Zones (Desktop) */}
                        <div
                            className="hidden md:block absolute inset-y-0 left-0 w-20 cursor-pointer z-20 hover:bg-black/5 transition-colors"
                            onClick={turnPrev}
                            title="Previous Page"
                        />
                        <div
                            className="hidden md:block absolute inset-y-0 right-0 w-20 cursor-pointer z-20 hover:bg-black/5 transition-colors"
                            onClick={turnNext}
                            title="Next Page"
                        />
                    </div>

                    {/* Controls */}
                    <div className="mt-8 flex justify-center gap-6 items-center">
                        <button
                            onClick={turnPrev}
                            disabled={currentPage === 0}
                            className="p-3 sm:p-4 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all active:scale-95 border border-gray-100"
                            aria-label="Previous Page"
                        >
                            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                        </button>

                        <span className="font-serif text-gray-600 font-medium text-xs sm:text-sm">
                            Page {currentPage + 1} / {pages.length}
                        </span>

                        <button
                            onClick={turnNext}
                            disabled={currentPage === pages.length - 1}
                            className="p-3 sm:p-4 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all active:scale-95 border border-gray-100"
                            aria-label="Next Page"
                        >
                            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Paper Stack Effect (Desktop only) */}
            <div className="hidden md:block w-[96%] max-w-5xl h-3 bg-white mx-auto shadow-sm mt-[-6px] rounded-b-sm border-x border-b border-gray-200" />
            <div className="hidden md:block w-[94%] max-w-5xl h-3 bg-white mx-auto shadow-sm mt-[-10px] rounded-b-sm border-x border-b border-gray-200" />
        </section>
    );
}
