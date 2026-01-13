"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

// Icons
import LogisticsIcon from "@/assets/services/logistics.svg";
import EducationIcon from "@/assets/services/education.svg";
import RetailIcon from "@/assets/services/retail.svg";
import HealthcareIcon from "@/assets/services/healthcare.svg";
import SaasIcon from "@/assets/services/saas.svg";
import FinanceIcon from "@/assets/services/finance.svg";
import ManufacturingIcon from "@/assets/services/manufacturing.svg";
import EnergyIcon from "@/assets/services/energy.svg";
import MediaIcon from "@/assets/services/media.svg";

const allIndustries = [
    {
        id: "logistics",
        name: "Logistics & Supply Chain",
        icon: LogisticsIcon,
        description:
            "End-to-end visibility and optimization of supply chain networks using predictive analytics and IoT integration to reduce costs and improve delivery times.",
        features: ["Route Optimization", "Inventory Management", "Fleet Tracking"],
        glow: "from-blue-500/30 via-cyan-400/30 to-sky-400/30",
    },
    {
        id: "education",
        name: "Education & EdTech",
        icon: EducationIcon,
        description:
            "Revolutionizing learning with immersive digital platforms, LMS integration, and personalized AI-driven tutoring systems for institutions and startups.",
        features: ["Virtual Classrooms", "Student Analytics", "Gamified Learning"],
        glow: "from-violet-500/30 via-purple-400/30 to-fuchsia-400/30",
    },
    {
        id: "retail",
        name: "Retail & E-commerce",
        icon: RetailIcon,
        description:
            "Building seamless omnichannel shopping experiences that bridge physical and digital stores, powered by real-time inventory and customer insights.",
        features: ["Omnichannel POS", "Customer Loyalty", "AI Recommendations"],
        glow: "from-pink-500/30 via-rose-400/30 to-orange-400/30",
    },
    {
        id: "healthcare",
        name: "Healthcare & HealthTech",
        icon: HealthcareIcon,
        description:
            "Delivering secure, HIPAA-compliant digital health solutions including telemedicine platforms, patient management systems, and medical data analysis.",
        features: ["Telemedicine", "EHR Integration", "Remote Monitoring"],
        glow: "from-emerald-500/30 via-teal-400/30 to-cyan-400/30",
    },
    {
        id: "saas",
        name: "SaaS & Startups",
        icon: SaasIcon,
        description:
            "Accelerating product development for high-growth startups with scalable cloud infrastructure, rapid prototyping, and MVP development services.",
        features: ["MVP Development", "Cloud Scaling", "SaaS Architecture"],
        glow: "from-orange-500/30 via-amber-400/30 to-yellow-300/30",
    },
    {
        id: "finance",
        name: "Finance & Fintech",
        icon: FinanceIcon,
        description:
            "Engineering secure, high-performance financial platforms for payments, banking, and wealth management with strict regulatory compliance.",
        features: ["Payment Gateways", "Blockchain Solutions", "Fraud Detection"],
        glow: "from-indigo-500/30 via-blue-500/30 to-sky-400/30",
    },
    {
        id: "energy",
        name: "Energy & Sustainability",
        icon: EnergyIcon,
        description:
            "Optimizing energy distribution and monitoring using smart grid technologies and renewable energy management systems.",
        features: ["Smart Grids", "Energy Monitoring", "Sustainability Tech"],
        glow: "from-green-500/30 via-lime-400/30 to-emerald-400/30",
    },

];

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

function TiltCard({ industry }: { industry: (typeof allIndustries)[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    function handleMouseMove(e: React.MouseEvent) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div variants={item} className="relative group">
            {/* Animated Glow Border */}
            <div
                className={`absolute -inset-[2px] rounded-[2rem] bg-linear-to-br ${industry.glow} blur-xl opacity-0 group-hover:opacity-100 transition duration-500`}
            />

            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative bg-white/55 backdrop-blur-2xl border border-white/70 rounded-[2rem] p-8 h-full shadow-xl"
            >
                <div className="flex flex-col h-full relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-16 h-16 rounded-2xl bg-white/80 border border-white shadow-lg flex items-center justify-center shrink-0"
                        >
                            <industry.icon className="w-10 h-10" />
                        </motion.div>

                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#634c9f] transition-colors">
                            {industry.name}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 grow">
                        {industry.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {industry.features.map((feature) => (
                            <span
                                key={feature}
                                className="px-3 py-1 text-xs font-semibold bg-white/80 border border-gray-200 rounded-full text-gray-700 backdrop-blur-md"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function IndustryDetailGrid() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-4 pb-28"
        >
            {allIndustries.map((industry) => (
                <TiltCard key={industry.id} industry={industry} />
            ))}
        </motion.div>
    );
}
