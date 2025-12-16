"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function SocialSidebar() {
    const socialLinks = [
        { name: "GitHub", href: "https://github.com/WayneChibeu", icon: <Github size={20} /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/wayne-chibeu-482451278/", icon: <Linkedin size={20} /> },
        { name: "X", href: "https://x.com/theamateur_tax", icon: <Twitter size={20} /> },
        { name: "Email", href: "mailto:wchibeu4@gmail.com", icon: <Mail size={20} /> },
    ];

    return (
        <div className="hidden md:block fixed bottom-0 left-10 z-50">
            <ul className="flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-slate-light after:block after:mx-auto after:mt-6">
                {socialLinks.map((link, index) => (
                    <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.5 + index * 0.1, // Delay to appear after other animations
                            ease: "easeInOut",
                        }}
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-light hover:text-teal hover:-translate-y-1 transition-all duration-300 block p-2"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
