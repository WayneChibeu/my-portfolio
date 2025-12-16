"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechPortrait() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0">
            {/* Animated Glow effect */}
            <motion.div
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-teal/20 blur-3xl rounded-full -z-10"
            />

            {/* Main image container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-teal/30 group bg-navy-light"
            >
                <Image
                    src="/hero-portrait.jpg"
                    alt="Wayne Chibeu"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Tech Overlay: Linear Gradient Grid */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none z-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--color-teal-tint) 1px, transparent 1px), linear-gradient(to bottom, var(--color-teal-tint) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Vignette for focus */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_var(--color-navy)_120%] opacity-40 z-10" />

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-teal z-20" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-teal z-20" />
            </motion.div>
        </div>
    );
}
