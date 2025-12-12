"use client";

import { motion } from "framer-motion";

const skills = {
    "Languages": ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5/CSS3"],
    "Frameworks": ["Next.js (App Router)", "React", "Node.js", "TailwindCSS", "Framer Motion"],
    "Tools & Platforms": ["Git", "Supabase", "Vercel", "Stripe", "Figma", "PostgreSQL"]
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

            <div className="grid md:grid-cols-3 gap-12 items-start">
                {/* About Text - Column 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:col-span-1"
                >
                    <p className="text-slate mb-4 text-base leading-relaxed">
                        I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                    </p>
                    <p className="text-slate mb-4 text-base leading-relaxed">
                        Fast-forward to today, and I&apos;ve had the privilege of building software for a <span className="text-teal">SaaS start-up</span> and collaborating with talented people.
                    </p>
                </motion.div>

                {/* Skill Lists - Column 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="md:col-span-1"
                >
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="mb-6 last:mb-0">
                            <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">{category}</h3>
                            <ul className="space-y-1">
                                {items.map(skill => (
                                    <li key={skill} className="text-slate text-sm font-mono flex items-center gap-2">
                                        <span className="text-teal">▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Profile Image - Column 3 */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 relative group"
                >
                    <div className="relative w-full max-w-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 border-2 border-teal rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                        <div className="relative rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/profile.png"
                                alt="Wayne Chibeu"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
