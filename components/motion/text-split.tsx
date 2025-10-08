"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function TextSplit({ text, className }: { text: string; className?: string }) {
    const letters = text.split("");
    const body = useRef(null);
    const isInView = useInView(body, {
        once: false, // 👈 triggers every time it enters view
        margin: "0px 100px -50px 0px",
    });

    const child: Variants = {
        hidden: { y: "-100%", opacity: 0 },
        visible: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: Math.min(i, letters.length - 1 - i) * 0.12,
            },
        }),
    };

    return (
        <div ref={body} className="overflow-hidden inline-block pt-1 tracking-tighter">
            {letters.map((char, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"} // 👈 toggle back to hidden when out of view
                    className={`inline-block tracking-tighter ${className}`}
                    custom={i}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}
