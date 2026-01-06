"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="container-custom section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
            >
                <span className="text-teal font-mono text-xl">02.</span>
                <h2 className="text-3xl font-heading font-bold text-white">Some Things I&apos;ve Built</h2>
                <div className="h-[1px] bg-navy-light flex-grow max-w-xs"></div>
            </motion.div>

            {/* Flagship Project: InvoiceDeck */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-12 gap-10 items-center mb-32"
            >
                {/* Project Image Area (Left) */}
                <div className="md:col-span-7 relative group">
                    <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all z-10 rounded-lg duration-500"></div>
                    <div className="bg-navy-light rounded-lg w-full border border-slate/10 flex items-center justify-center relative overflow-hidden group-hover:border-teal/50 transition-all shadow-2xl">
                        {/* Real Screenshot */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/invoicedeck-screen.png"
                            alt="InvoiceDeck Dashboard UI"
                            className="w-full h-auto object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Project Content (Right) */}
                <div className="md:col-span-5 md:text-right relative z-20 md:-ml-12">
                    <p className="font-mono text-teal text-sm mb-2">Featured Project</p>
                    <h3 className="text-white text-3xl font-bold mb-6 hover:text-teal transition-colors cursor-pointer">InvoiceDeck</h3>

                    <div className="bg-navy-light p-6 rounded-lg text-slate shadow-xl mb-6 text-sm leading-relaxed border border-transparent hover:border-teal/20 transition-all">
                        The comprehensive invoicing platform for freelancers.
                        Features <span className="text-teal">recurring invoices</span>, multi-currency support,
                        and a beautiful client portal. Helping users track payments and look professional.
                    </div>

                    <ul className="flex flex-wrap gap-4 justify-end text-slate-light font-mono text-xs mb-8">
                        <li>Next.js</li>
                        <li>Supabase</li>
                        <li>Stripe</li>
                        <li>TailwindCSS</li>
                        <li>PWA</li>
                    </ul>

                    <div className="flex gap-4 justify-end text-slate-light">
                        {/* Private Repo - No GitHub Link */}
                        <a href="https://invoicedeck.app/" target="_blank" className="hover:text-teal transition-colors flex items-center gap-2">
                            <span className="text-xs font-mono">Live Site</span>
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard
                    title="MusicDeck"
                    desc="A clean, ad-free Android music player. Features background playback, Material 3 design, and album art display using Jetpack Media3."
                    stack={["Kotlin", "Jetpack Media3", "Material 3", "Android"]}
                    github="https://github.com/WayneChibeu/MusicDeck"
                />
                <ProjectCard
                    title="DocuChat AI"
                    desc="RAG-based document assistant. Upload PDFs and chat with them using semantic search and AI summarization."
                    stack={["OpenAI", "Pinecone", "LangChain", "Next.js"]}
                    github="https://github.com/WayneChibeu/docuchat-ultra"
                    external="https://docuchat-ultra.vercel.app/"
                />
                <ProjectCard
                    title="Portfolio V2"
                    desc="The site you're looking at right now. Built with Next.js 15, Tailwind, and Framer Motion for premium interactivity."
                    stack={["Next.js", "Framer Motion", "Tailwind"]}
                    github="https://github.com/WayneChibeu/my-portfolio"
                    external="https://waynes-portfolio.vercel.app"
                />
            </div>
        </section>
    );
}


function ProjectCard({ title, desc, stack, github, external }: { title: string, desc: string, stack: string[], github?: string, external?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className="relative bg-navy-light rounded-lg cursor-pointer transition-all hover:shadow-xl group overflow-hidden border border-transparent"
        >
            {/* Spotlight Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.15), transparent 40%)`,
                }}
            />
            {/* Border Glow */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.4), transparent 40%)`,
                }}
            />

            <div className="relative h-full p-8 flex flex-col z-10 bg-navy-light/90 h-full rounded-lg">
                <div className="flex justify-between items-center mb-8">
                    <Folder className="text-teal w-10 h-10" />
                    <div className="flex gap-4 text-slate z-20">
                        {github && <a href={github} className="hover:text-teal transition-colors"><Github size={20} /></a>}
                        {external && <a href={external} className="hover:text-teal transition-colors"><ExternalLink size={20} /></a>}
                    </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-teal transition-colors">{title}</h3>
                <p className="text-slate text-sm mb-8 leading-relaxed">
                    {desc}
                </p>

                <ul className="flex gap-3 text-slate-light/60 font-mono text-xs flex-wrap mt-auto">
                    {stack.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
            </div>
        </motion.div>
    )
}
