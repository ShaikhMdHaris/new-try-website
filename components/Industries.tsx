"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Briefcase, Globe2, Rocket } from "lucide-react";

const industries = [
    { name: "Startups & Entrepreneurs", icon: Rocket },
    { name: "Small & Medium Businesses", icon: Building2 },
    { name: "Educational Institutions", icon: GraduationCap },
    { name: "Service-based Companies", icon: Briefcase },
    { name: "Local & Global Enterprises", icon: Globe2 },
];

export default function Industries() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Industries We Serve
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        Empowering diverse sectors with tailored digital solutions
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all w-48 text-center group"
                        >
                            <div className="p-4 rounded-full bg-slate-800 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                                <industry.icon className="w-8 h-8" />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                                {industry.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
