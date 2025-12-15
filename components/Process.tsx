"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Requirement Analysis",
        description: "Understanding business goals and technical needs.",
    },
    {
        number: "02",
        title: "Planning & Architecture",
        description: "Designing scalable systems and selecting the right stack.",
    },
    {
        number: "03",
        title: "Design & Development",
        description: "Creating intuitive UI/UX and robust functionality.",
    },
    {
        number: "04",
        title: "Testing & Optimization",
        description: "Ensuring quality, performance, and security.",
    },
    {
        number: "05",
        title: "Deployment & Support",
        description: "Launching smoothly and providing long-term reliability.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Our Development Process
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        A systematic approach to delivering excellence
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 flex items-center justify-center text-lg font-bold text-slate-500 group-hover:text-emerald-400 transition-all mb-6 bg-slate-950 z-10">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
