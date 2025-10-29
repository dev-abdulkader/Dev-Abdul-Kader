/* eslint-disable */
"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { StaticImageData } from "next/image";
import stationary from "@/public/stationary.png";
import dinmajur from "@/public/project/dinmajur.png";
import ProjectCard from "./project-card";
import hypetownbd from "@/public/project/hypetownbd.png";

const projects = [
    {
        id: 1,
        image: dinmajur,
        bgColor: "#1d4c57",
        liveLink: "https://dinmajur.com",
    },
    {
        id: 2,
        image: hypetownbd,
        bgColor: "#1d4c57",
        liveLink: "https://hypetownbd.com",
    }

];


// HorizontalScrollCarousel Component
interface HorizontalScrollCarouselProps {
    children: React.ReactNode;
}

export const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ children }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const [viewportWidth, setViewportWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && containerRef.current) {
            const totalWidth = containerRef.current.scrollWidth;
            const vw = window.innerWidth;
            setViewportWidth(vw);
            setContentWidth(totalWidth - vw);
        }
    }, [children]);

    // Only create transform when viewportWidth is known
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [viewportWidth || 0, -(contentWidth || 0)]
    );

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div ref={containerRef} style={{ x }} className="flex  px-[35vw]">
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

// ProjectCard Component
interface ProjectItem {
    id: number;
    title: string;
    description: string;
    category: string;
    company: string;
    timeline: string;
    liveLink: string;
    image: StaticImageData;
    bgColor: string;
}




// ProjectsSection Component
export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const segment = 1 / projects.length;
            const index = Math.min(Math.floor(progress / segment), projects.length - 1);
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const bgColor = useTransform(
        scrollYProgress,
        [0, 1],
        [projects[0].bgColor, projects[projects.length - 1].bgColor]
    );

    const handleCardClick = (project: ProjectItem) => {
        console.log(`Clicked on project: ${project.title}`);
    };

    return (
        <motion.section
            ref={sectionRef}
            // style={{ background: projects[activeIndex].bgColor }}
            className="py-12 transition-colors bg-black duration-300"
        >
            <HorizontalScrollCarousel>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}

                        visitLink={project.liveLink}
                        img={project.image}
                        bgColor={project.bgColor}
                    />
                ))}
            </HorizontalScrollCarousel>
        </motion.section>
    );
}