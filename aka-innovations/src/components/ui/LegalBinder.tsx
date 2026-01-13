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

    // 0 represents the cover/first page
    // Max page is pages.length - 1

    const turnNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const turnPrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center py-20 bg-[#e6e8eb] perspective-1000">
            {/* Binder Metadata */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-widest uppercase">
                    {title}
                </h1>
                <p className="text-sm font-serif text-gray-500 mt-2 uppercas">
                    Last Updated: {lastUpdated}
                </p>
            </div>

            {/* 3D Binder Container */}
            <div className="relative w-full max-w-[850px] aspect-[4/5] md:aspect-[1.4/1] flex justify-center perspective-[2000px]">

                {/* Book Spine/Binding (Visual only) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gray-800 rounded-l-sm z-0 hidden md:block opacity-20 transform -translate-x-1/2" />

                {/* Pages Container */}
                <div className="relative w-full h-full md:w-1/2 md:h-full bg-transparent perspective-[2000px]">

                    {/* Main Page Area */}
                    <div className="relative w-full h-full bg-white shadow-2xl border border-gray-200 overflow-hidden">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ rotateY: 90, opacity: 0, transformOrigin: "left" }}
                                animate={{ rotateY: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                                exit={{ rotateY: -90, opacity: 0, transformOrigin: "left", transition: { duration: 0.4, ease: "easeIn" } }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="absolute inset-0 bg-white"
                            >
                                <div className="absolute inset-0 p-8 md:p-12 overflow-y-auto">
                                    {/* Header for page */}
                                    <div className="flex justify-between items-center border-b border-gray-900 pb-4 mb-6">
                                        <span className="text-xs font-serif font-bold tracking-widest text-gray-400">
                                            {title.toUpperCase()}
                                        </span>
                                        <span className="text-xs font-serif font-bold tracking-widest text-gray-400">
                                            PAGE {currentPage + 1} OF {pages.length}
                                        </span>
                                    </div>

                                    <div className="prose prose-slate font-serif text-justify leading-relaxed text-gray-800">
                                        {pages[currentPage]}
                                    </div>

                                    {/* Footer for page */}
                                    <div className="w-full mt-12 flex justify-between items-center pt-4 border-t border-gray-200">
                                        <span className="text-[10px] text-gray-400 font-serif uppercase">
                                            Confidential
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Click zones for easy navigation (invisible) */}
                        <div className="absolute inset-y-0 left-0 w-16 cursor-pointer z-20" onClick={turnPrev} title="Previous Page" />
                        <div className="absolute inset-y-0 right-0 w-16 cursor-pointer z-20" onClick={turnNext} title="Next Page" />
                    </div>

                    {/* Navigation Controls (Visible Buttons) */}
                    <div className="absolute -bottom-20 left-0 right-0 flex justify-center space-x-8 items-center">
                        <button
                            onClick={turnPrev}
                            disabled={currentPage === 0}
                            className="p-4 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <span className="font-serif text-gray-600 font-medium">Page {currentPage + 1} / {pages.length}</span>
                        <button
                            onClick={turnNext}
                            disabled={currentPage === pages.length - 1}
                            className="p-4 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

            </div>

            {/* Paper Stack Effect (Visual) */}
            <div className="w-[840px] h-4 bg-white mx-auto shadow-sm mt-[-4px] hidden md:block rounded-b-sm border-x border-b border-gray-200" />
            <div className="w-[830px] h-4 bg-white mx-auto shadow-sm mt-[-10px] hidden md:block rounded-b-sm border-x border-b border-gray-200" />

        </div>
    );
}
