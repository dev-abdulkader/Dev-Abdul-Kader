/* eslint-disable */
'use client';
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Lenis from "lenis";
import Experience from "./experience";

export default function StickyContainer() {
    const scrollY = useMotionValue(0);
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.08, duration: 1.2 });

        function raf(time: any) {
            lenis.raf(time);
            scrollY.set(lenis.scroll);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    // Map scroll to 0-1 progress over desired scroll range
    const scrollProgress = useTransform(
        scrollY,
        [0, typeof window !== "undefined" ? window.innerHeight * 2 : 1], // animate over 2 screen heights
        [0, 1]
    );

    return (
        <main ref={container} className="relative h-[200vh]">
            <StickySection
                scrollProgress={scrollProgress}
                scaleRange={[0.5, 1]}
                widthRange={["30vw", "100vw"]}
                heightRange={["30vh", "100vh"]}
                yRange={["50vh", "0vh"]}
            >
                <Experience />
            </StickySection>
        </main>
    );
}

const StickySection = ({
    scrollProgress,
    children,
    scaleRange = [0.8, 1],
    widthRange = ["50vw", "100vw"],
    heightRange = ["50vh", "100vh"],
    yRange = [0, 0],
    zIndex = "z-10",
    color,
}: {
    scrollProgress: any;
    children?: React.ReactNode;
    scaleRange?: [number, number];
    widthRange?: [string, string];
    heightRange?: [string, string];
    yRange?: [string | number, string | number];
    zIndex?: string;
    color?: string;
}) => {
    const scale = useTransform(scrollProgress, [0, 1], scaleRange);
    const width = useTransform(scrollProgress, [0, 1], widthRange);
    const height = useTransform(scrollProgress, [0, 1], heightRange);
    const y = useTransform(scrollProgress, [0, 1], yRange);

    return (
        <motion.div
            style={{ scale, y }}
            className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${zIndex}`}
        >
            <motion.div
                style={{ width, height }}
                className={`relative flex items-center justify-center ${color || ''}`}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
