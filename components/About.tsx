"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";

const features = [
    "Client-centric development approach",
    "Modern and scalable architecture",
    "Clean UI/UX with performance focus",
    "Affordable solutions without quality compromise",
    "On-time delivery and transparent communication",
    "Long-term support and maintenance",
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Who We Are
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            InnoSite Tech Solutions is a technology-focused digital services agency dedicated to helping businesses establish a strong online presence and optimize their operations through modern software solutions.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            We believe technology should be <span className="text-emerald-400 font-semibold">clear, efficient, scalable, and impactful</span>. Our solutions are designed not only to meet today’s business needs but also to prepare our clients for tomorrow’s digital challenges.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                                    <p className="text-slate-400">
                                        To empower startups, small businesses, and enterprises with innovative, secure, and scalable digital solutions that accelerate growth and improve operational efficiency.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                                    <p className="text-slate-400">
                                        To become a trusted global technology partner known for delivering intelligent, reliable, and future-ready digital products.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50"
                        >
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
