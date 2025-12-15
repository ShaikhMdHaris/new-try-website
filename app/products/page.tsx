"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Rocket, Stars } from "lucide-react";

export default function Products() {
    return (
        <main className="h-screen w-full bg-slate-950 text-slate-50 overflow-hidden flex flex-col relative">
            <Navbar />

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[100px] animate-pulse delay-75" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            opacity: Math.random() * 0.5 + 0.1,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [null, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                        }}
                    />
                ))}
            </div>

            <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-50 animate-pulse" />
                    <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-700 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
                        <Rocket className="w-16 h-16 text-cyan-400" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2"
                    >
                        <Stars className="w-8 h-8 text-yellow-400" />
                    </motion.div>
                </motion.div>

                <div className="text-center space-y-6 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-violet-400 animate-gradient-x">
                            LAUNCHING
                        </span>
                        <br />
                        <span className="text-slate-700 text-4xl md:text-6xl">SOON</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl md:text-2xl text-slate-400 font-light tracking-wide"
                    >
                        Something <span className="text-cyan-400 font-semibold">revolutionary</span> is on the horizon.
                    </motion.p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                        className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md mx-auto opacity-50"
                    />
                </div>
            </div>
        </main>
    );
}
