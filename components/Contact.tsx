"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/Button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setStatus("error");
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Something went wrong");
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Let’s Build Something <br />
                            <span className="text-gradient">Innovative Together</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10">
                            Ready to transform your digital presence? Contact us for a free consultation and let&apos;s discuss how we can help your business grow.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <a href="mailto:contact@innositetechsolutions.com" className="text-slate-400 hover:text-white transition-colors">
                                        contact@innositetechsolutions.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-teal-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Call Us</h3>
                                    <a href="tel:+91XXXXXXXXXX" className="text-slate-400 hover:text-white transition-colors">
                                        +91 XXXXXXXXXX
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Visit Us</h3>
                                    <p className="text-slate-400">
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                    placeholder="+91 XXXXXXXXXX"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button
                                className="w-full bg-emerald-500 hover:bg-emerald-600 border-none"
                                size="lg"
                                disabled={status === "loading" || status === "success"}
                            >
                                {status === "loading" ? (
                                    <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                                ) : status === "success" ? (
                                    <>Message Sent <CheckCircle2 className="w-4 h-4 ml-2" /></>
                                ) : (
                                    <>Request Free Consultation <Send className="w-4 h-4 ml-2" /></>
                                )}
                            </Button>

                            {status === "success" && (
                                <p className="text-emerald-400 text-sm text-center">
                                    Thank you! We have received your message and will get back to you shortly.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {errorMessage || "Something went wrong. Please try again."}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
