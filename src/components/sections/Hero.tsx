"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center container-custom pt-20">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-4xl"
            >
                <motion.p variants={fadeInUp} className="text-teal font-medium mb-5 text-lg">
                    Hi, my name is
                </motion.p>

                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    Wayne Chibeu.
                </motion.h1>

                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-slate mb-8 leading-tight">
                    I build production-ready SaaS.
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-slate max-w-xl text-lg mb-10 leading-relaxed">
                    I&apos;m a Full-Stack Developer & Indie Hacker specialized in building accessible,
                    pixel-perfect web applications. Currently, I&apos;m focused on building{" "}
                    <span className="text-teal">InvoiceDeck</span> and helping businesses scale
                    with modern tech stacks.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex gap-4">
                    <a href="#projects" className="btn-primary">
                        Check out my work
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Let&apos;s talk
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
