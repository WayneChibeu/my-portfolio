"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            container.style.setProperty("--mouse-x", `${clientX}px`);
            container.style.setProperty("--mouse-y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 h-full w-full bg-navy overflow-hidden">
            {/* Interactive Mouse Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 255, 218, 0.06), transparent 40%)`
                }}
            ></div>

            {/* Radial Gradient Blobs (Animated) */}
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-slate/5 rounded-full blur-[120px] opacity-20 animate-pulse-slow delay-1000"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
        </div>
    );
}
