"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

function StepItem({ step, index }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-20% 0px -30% 0px",
        once: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="relative flex gap-6"
        >
            {/* Icon */}
            <div
                className={`relative z-10 flex items-center justify-center
          w-9 h-9 rounded-full border
          ${step.highlight
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-gray-300 text-gray-600"
                    }
        `}
            >
                <step.icon className="w-4 h-4" />
            </div>

            {/* Content */}
            <div className="max-w-lg">
                <span className="block text-sm font-medium text-gray-400 mb-1">
                    {step.id}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

import { motion } from "framer-motion";
import {
    MessageSquareText,
    PenTool,
    Rocket,
    Repeat,
    TrendingUp,
} from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Understand the business",
        description:
            "We unpack incentives, constraints, and context before thinking about solutions.",
        icon: MessageSquareText,
    },
    {
        id: "02",
        title: "Design the system",
        description:
            "UX, UI, and architecture are shaped together to avoid downstream friction.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Build the MVP",
        description:
            "We move fast without cutting corners. Scope stays honest.",
        icon: Rocket,
        highlight: true,
    },
    {
        id: "04",
        title: "Learn & refine",
        description:
            "Real usage—not opinions—drives iteration and simplification.",
        icon: Repeat,
    },
    {
        id: "05",
        title: "Scale responsibly",
        description:
            "Performance and infra scale only when demand earns it.",
        icon: TrendingUp,
    },
];

export function HowWeWork() {
    return (
        <section className=" py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT — NO LONGER EMPTY */}
                    <div className="lg:sticky lg:top-28 space-y-12">

                        {/* Headline */}
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                                How we work
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                                Our process is designed to reduce risk,
                                eliminate waste, and compound clarity over time.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-16 h-px bg-gray-300" />

                        {/* Process Index */}
                        <div className="space-y-4">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`flex items-center gap-4 text-sm
                    ${step.highlight
                                            ? "text-gray-900 font-semibold"
                                            : "text-gray-400"
                                        }
                  `}
                                >
                                    <span className="w-8">{step.id}</span>
                                    <span>{step.title}</span>
                                </div>
                            ))}
                        </div>

                        {/* Philosophy Line */}
                        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                            We don’t separate strategy, design, and engineering.
                            Treating them as silos is how products quietly fail.
                        </p>
                    </div>

                    {/* RIGHT — EXECUTION */}
                    <div className="relative">
                        {/* Vertical guide */}
                        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gray-200" />

                        <div className="space-y-20">
                            {steps.map((step, index) => (
                                <StepItem key={step.id} step={step} index={index} />
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
