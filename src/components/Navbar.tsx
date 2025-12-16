"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="text-teal font-heading font-bold text-2xl border-2 border-teal px-2 py-1 rounded">
                    WC.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-light hover:text-teal font-medium text-sm transition-colors"
                        >
                            <span className="text-teal mr-1">0{i + 1}.</span> {link.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-4 py-2 border border-teal text-teal rounded hover:bg-teal-tint transition-colors text-sm font-medium"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-teal"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-navy-light/95 backdrop-blur-lg flex items-center justify-center md:hidden"
                    >
                        <button
                            className="absolute top-6 right-6 text-teal"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={30} />
                        </button>

                        <nav className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-slate-light hover:text-teal font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-3 border border-teal text-teal rounded hover:bg-teal-tint transition-colors w-fit mx-auto"
                            >
                                Resume
                            </a>

                            <div className="flex gap-6 justify-center mt-4">
                                <a href="https://github.com/WayneChibeu" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/wayne-chibeu-482451278/" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Linkedin size={24} /></a>
                                <a href="https://x.com/theamateur_tax" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Twitter size={24} /></a>
                                <a href="mailto:wchibeu4@gmail.com" className="text-slate-light hover:text-teal transition-colors"><Mail size={24} /></a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
