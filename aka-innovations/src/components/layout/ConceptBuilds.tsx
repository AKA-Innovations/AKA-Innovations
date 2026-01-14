"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Layers,
    ShieldCheck,
    Cpu,
} from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Secure Patient Data Pipeline",
        category: "Healthcare • Backend Architecture",
        problem:
            "Patient data scattered across legacy hospital systems caused delays in diagnosis and care continuity.",
        solution:
            "Designed a FHIR-compliant data pipeline that aggregates records in real time with strict access control.",
        stack: ["Python", "FastAPI", "PostgreSQL", "AWS (HIPAA-ready)"],
        icon: ShieldCheck,
    },
    {
        id: 2,
        title: "Real-time Supply Chain Intelligence",
        category: "Logistics • SaaS Platforms",
        problem:
            "Operations teams relied on outdated, batch-based reports to make time-sensitive inventory decisions.",
        solution:
            "Built an event-driven dashboard streaming live fleet, inventory, and exception metrics.",
        stack: ["Next.js", "Redis", "Kafka", "Socket.io"],
        icon: Layers,
    },
    {
        id: 3,
        title: "GrievEase — Digital Grievance Redressal System",
        category: "GovTech • UX + Systems",
        problem:
            "Citizen grievances were lost in manual processes, leading to low transparency and poor accountability.",
        solution:
            "Developed a centralized grievance platform with real-time tracking, role-based dashboards, and analytics.",
        stack: ["React", "Spring Boot", "MySQL", "Data Visualization"],
        icon: Cpu,
    },
];

export function ConceptBuilds() {
    return (
        <section className="py-28 px-4 w-full ">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Proof of Capability
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            These are not demos or experiments.
                            They are real systems built to handle scale, complexity, and responsibility.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        Explore Services <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="group relative flex flex-col p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <project.icon className="w-6 h-6 text-gray-700" />
                            </div>

                            {/* Title */}
                            <div className="mb-5">
                                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <span className="text-sm font-semibold text-gray-900 block mb-1">
                                        Problem
                                    </span>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-gray-900 block mb-1">
                                        Solution
                                    </span>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-14 md:hidden flex justify-center">
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-blue-600 font-semibold"
                    >
                        Explore Services <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
