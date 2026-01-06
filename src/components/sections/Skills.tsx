"use client";

import { motion } from "framer-motion";

const skills = {
    "Languages": ["TypeScript", "JavaScript (ES6+)", "Kotlin", "Python", "SQL", "HTML5/CSS3"],
    "Frameworks": ["Next.js (App Router)", "React", "Node.js", "TailwindCSS", "Framer Motion"],
    "Tools & Platforms": ["Git", "Supabase", "Vercel", "Android Studio", "Paystack", "PostgreSQL"]
};

export default function Skills() {
    return (
        <section id="skills" className="container-custom section-padding max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-teal font-mono text-xl">03.</span>
                <h2 className="text-3xl font-heading font-bold text-white">Skills & Technologies</h2>
                <div className="h-[1px] bg-navy-light flex-grow max-w-xs"></div>
            </motion.div>

            <div className="flex flex-col gap-12">
                {/* About Text - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="text-slate mb-4 text-base leading-relaxed">
                        I&apos;ve been fascinated by technology since I was young. While I studied Civil Engineering at university, my passion for building digital products never faded. In 2025, I received a scholarship to pursue a full-stack development specialization — and I haven&apos;t looked back since.
                    </p>
                    <p className="text-slate text-base leading-relaxed">
                        Today, I&apos;m focused on building my own <span className="text-teal">SaaS products</span> like InvoiceDeck and solving real-world problems with code.
                    </p>
                </motion.div>

                {/* Skill Lists - 3 Columns */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-navy-light p-6 rounded-lg border border-transparent hover:border-teal/30 transition-all duration-300">
                            <h3 className="text-teal font-bold mb-4 text-sm uppercase tracking-wider">{category}</h3>
                            <ul className="space-y-2">
                                {items.map(skill => (
                                    <li key={skill} className="text-slate-light text-sm font-mono flex items-center gap-2">
                                        <span className="text-teal/50">▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
