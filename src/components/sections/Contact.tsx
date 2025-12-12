"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="min-h-[60vh] container-custom section-padding text-center flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p className="text-teal font-mono mb-4 text-lg">04. What&apos;s Next?</p>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-slate max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                    I&apos;m currently open for new opportunities and collaborations.
                    Whether you have a question about my work, a project idea, or just want to discuss the latest tech,
                    I&apos;ll try my best to get back to you!
                </p>
                <a
                    href="mailto:wchibeu4@gmail.com"
                    className="btn-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}
