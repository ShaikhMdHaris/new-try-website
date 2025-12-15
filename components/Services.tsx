"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Cloud, Bot, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Website Design & Development",
        description: "Responsive, fast, and SEO-optimized websites that reflect your brand identity.",
        tags: ["React", "Next.js", "WordPress"],
        color: "cyan",
    },
    {
        icon: Smartphone,
        title: "Mobile Application Development",
        description: "Secure and scalable mobile applications tailored to your business requirements.",
        tags: ["React Native", "iOS", "Android"],
        color: "violet",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Intuitive, visually appealing, and user-friendly designs that improve engagement.",
        tags: ["Figma", "Prototyping", "User Journey"],
        color: "pink",
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps Solutions",
        description: "Deploy, manage, and scale applications using modern cloud and DevOps practices.",
        tags: ["AWS", "CI/CD", "Linux"],
        color: "blue",
    },
    {
        icon: Bot,
        title: "AI & Automation Solutions",
        description: "Integrate AI-driven features and automation to optimize workflows.",
        tags: ["AI Integration", "Automation", "Data Processing"],
        color: "emerald",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        Comprehensive digital solutions tailored to your business needs
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                <service.icon className="w-8 h-8 text-emerald-400" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 mb-6 line-clamp-3">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center text-sm font-medium text-emerald-400 group-hover:translate-x-1 transition-transform cursor-pointer">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
