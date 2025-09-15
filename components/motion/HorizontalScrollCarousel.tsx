/*eslint-disable*/
"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export const HorizontalScrollCarousel = ({ children }: { children: React.ReactNode }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map scroll progress to horizontal movement
    const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    // Apply spring smoothing to rawX
    const x = useSpring(rawX, {
        stiffness: 80,   // lower = smoother
        damping: 20,     // higher = more resistance
        mass: 0.5,       // adjust for floaty feel
    });

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-20 relative pl-60"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
