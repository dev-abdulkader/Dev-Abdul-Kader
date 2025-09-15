/* eslint-disable */
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParagraphProps {
    text: string;
}

export default function Paragraph({ text }: ParagraphProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    // Track scroll relative to viewport (no sticky parent interference)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 40%", "end 60%"], // stretch the animation over a longer scroll
    });

    return (
        <div ref={ref} className="container mx-auto py-40">
            <p className="sm:text-4xl md:text-5xl text-3xl font-bold relative text-gray-300 leading-[1]">
                {text.split("").map((char, i) => {
                    const start = i / text.length;
                    const end = start + 0.05; // stagger each character

                    const color = useTransform(
                        scrollYProgress,
                        [start, end],
                        ["#D1D5DB", "#000000",] // light gray → black
                    );

                    return (
                        <motion.span
                            key={i}
                            style={{ color }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    );
                })}
            </p>
        </div>
    );
}
