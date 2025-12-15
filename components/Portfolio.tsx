"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/Button";

const projects = [
    {
        title: "E-Commerce Platform Redesign",
        category: "Web Development",
        description: "A modern, high-performance e-commerce solution with AI-driven product recommendations.",
        image: "/project1.jpg", // Placeholder
        tags: ["Next.js", "Shopify", "AI"],
    },
    {
        title: "FinTech Mobile App",
        category: "Mobile App",
        description: "Secure and intuitive mobile banking application with real-time transaction tracking.",
        image: "/project2.jpg", // Placeholder
        tags: ["React Native", "Node.js", "Security"],
    },
    {
        title: "Healthcare Cloud Migration",
        category: "Cloud Solution",
        description: "Scalable cloud architecture for a healthcare provider ensuring HIPAA compliance.",
        image: "/project3.jpg", // Placeholder
        tags: ["AWS", "DevOps", "Compliance"],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Our Recent Work
                        </motion.h2>
                        <p className="text-slate-400 text-lg">
                            Explore how we&apos;ve helped businesses transform their digital presence.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
                        >
                            <div className="relative h-48 bg-slate-800 overflow-hidden p-4">
                                <Image
                                    src="/logo-new.png"
                                    alt={project.title}
                                    fill
                                    className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                    <Button size="sm" variant="outline" className="bg-slate-950/50 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black">
                                        View Case Study
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                                    View Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline">
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
