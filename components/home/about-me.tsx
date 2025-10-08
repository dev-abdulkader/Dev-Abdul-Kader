"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TextEffect } from "../core/text-effect";

export default function AboutMe() {
    return (
        <div
            className={`
                 transition-colors duration-500 bg-gradient-to-b from-black via-red-950 to-red-900 text-white`}
        >
            <div className="grid place-content-center max-w-7xl mx-auto py-40 text-white min-h-screen">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="sm:text-4xl text-2xl font-bold mb-4"
                    >
                        Hi, I&apos;m {" "}
                        <span className="bg-white/20 border border-white rounded-lg italic px-2">
                            Abdul Kader
                        </span>
                    </motion.h2>

                    <div

                        className="sm:text-base text-sm max-w-2xl mx-auto"
                    >
                        <TextEffect per="word" as="p" preset="blur" >
                            Experienced developer with 2+ years of expertise in programming languages and software development frameworks, committed to continuous learning and delivering exceptional results.
                        </TextEffect>
                    </div>
                </div>

                {/* Personal Statement */}
                <div

                    className="max-w-screen-2xl mx-auto space-y-4 flex flex-col justify-center"
                >
                    <Quote className="w-10 h-10 fill-white rotate-180" />

                    <TextEffect per="word" as="p" preset="blur" className="sm:text-4xl md:text-5xl text-3xl sm:mb-6 mb-3 sm:px-10 px-5">
                        As an innovative Full-Stack Developer, I have strong expertise in modern JavaScript frameworks such as React and Next.js, and backend frameworks including Node.js, Express, and NestJS. I am well-versed in building scalable applications following best practices, with experience in microservices architecture, CI/CD pipelines, Docker, and cloud hosting.
                    </TextEffect>
                </div>
            </div>
        </div>
    );
}
