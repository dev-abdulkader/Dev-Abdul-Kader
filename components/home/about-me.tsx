"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TextEffect } from "../core/text-effect";

export default function AboutMe() {
    return (
        <div className="grid place-content-center px-4 py-16 text-white h-screen">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="sm:text-4xl text-2xl font-bold mb-4"
                >
                    Passionate About{" "}
                    <span className="bg-white/20 border border-white rounded-lg italic px-2">
                        Building Digital Experiences
                    </span>
                </motion.h2>

                <div

                    className="sm:text-base text-sm max-w-2xl mx-auto"
                >
                    <TextEffect per="word" as="p" preset="blur" >
                        I love creating web applications that are not only functional but also
                        enjoyable to use.
                    </TextEffect>
                </div>
            </div>

            {/* Personal Statement */}
            <div

                className="max-w-screen-lg mx-auto space-y-4 flex flex-col justify-center"
            >
                <Quote className="w-10 h-10 fill-white rotate-180" />

                <p className="sm:text-4xl md:text-5xl text-3xl sm:mb-6 mb-3 sm:px-10 px-5">
                    I enjoy turning ideas into reality, building interfaces that delight users
                    and systems that work seamlessly behind the scenes.
                </p>
            </div>
        </div>
    );
}
