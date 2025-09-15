/* eslint-disable */
'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from 'lenis';
import Paragraph from "../motion/Paragraph";
import Experience from "./experience";
import AboutMe from "./about-me";
import { Section } from "lucide-react";
import { Stick } from "next/font/google";
import ProjectsSection from "./project-section";

export default function StickyContainer() {
    const container = useRef<any | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
        <main ref={container} className="relative h-[500vh]">
            <Section1 />
            <StickySection
                start={0.0}
                end={0.25}
                scrollYProgress={scrollYProgress}
            >
                <AboutMe />
            </StickySection>

            <StickySection
                start={0.25}
                end={0.5}
                scrollYProgress={scrollYProgress}
            >
                <Experience />
            </StickySection>
            <StickySection
                start={0.25}
                end={0.5}
                zIndex="-z-10"
                scrollYProgress={scrollYProgress}

            />
            <StickySection
                start={0.25}
                end={0.5}
                scrollYProgress={scrollYProgress}
                color="bg-[#f7f7f7]"

            />


        </main>
    );
}


const Section1 = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center transition-colors duration-500 bg-gradient-to-b from-black via-red-950 to-red-900 text-white`}
        >

        </div>
    );
};







const StickySection = ({
    scrollYProgress,
    start,
    end,
    color,
    zIndex,
    children,
}: {
    scrollYProgress: any;
    start: number;
    end: number;
    color?: string;
    zIndex?: string;
    children?: React.ReactNode;
}) => {
    const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
    const scale = useTransform(localProgress, [0, 1], [0.8, 1]);
    const width = useTransform(localProgress, [0, 1], ["50vw", "100vw"]);
    const height = useTransform(localProgress, [0, 1], ["50vh", "100vh"]);

    return (
        <motion.div
            style={{ scale }}
            className={`sticky ${zIndex} top-0 h-screen flex items-center justify-center overflow-hidden`}
        >
            <motion.div
                style={{ width, height }}
                className={`relative flex items-center justify-center ${color} `}
            >

                {children}
            </motion.div>
        </motion.div>
    );
};
