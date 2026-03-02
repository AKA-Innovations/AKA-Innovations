'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-white text-center">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to <span className="text-blue-400">Digitize</span> Your Institution?
                </h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join the future of education management. Whether you need a custom deployment or a walkthrough of our live demo, we're here to help.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact?subject=School+ERP"
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-600/50 hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                        Request a Demo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact?subject=School+ERP"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    >
                        <Mail className="mr-2 w-5 h-5" />
                        Talk to Our Team
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    No credit card required. No pushy sales calls. Just honest advice.
                </p>
            </div>
        </section>
    );
};

export default CallToAction;
