"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative w-5 h-5">
                                <Image
                                    src="/logo-new.png"
                                    alt="InnoSite Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                InnoSite
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6">
                            Turning Ideas into Intelligent Digital Experiences. We build scalable, secure, and future-ready solutions.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/innosite_tech_solutions2024/" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/innosite-tech-solution/" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "AI & Automation"].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            {["About Us", "Our Process", "Portfolio", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li>India</li>
                            <li>
                                <a href="mailto:innositetechsolutions@gmail.com" className="hover:text-emerald-400 transition-colors">
                                    innositetechsolutions@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919604022192" className="hover:text-emerald-400 transition-colors">
                                    +91 9604022192
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} InnoSite Tech Solutions. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by InnoSite Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
