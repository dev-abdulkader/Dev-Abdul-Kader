/* eslint-disable */
"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowRight, Building2, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import realestate from "@/public/realestate.png";
import ecommerce from "@/public/ecommerce.png";
import mooncosmetics from "@/public/mooncosmetics.png";
import heyjabi from "@/public/heyjabi.png";
import stationary from "@/public/stationary.png";
import dinmajur from "@/public/dinmajur.png";

// Project data
const projects = [
    {
        id: 1,
        title: "Skyline Tower Renovation",
        description: "DinMajur is a modern peer-to-peer platform that connects skilled freelancers with clients.",
        duration: "12 months",
        category: "Commercial",
        image: dinmajur,
        bgColor: "#f7f7f7", // Light gray
    },
    {
        id: 2,
        title: "Green Oasis Residential",
        description: "A luxury residential complex featuring eco-friendly materials and smart home technology.",
        duration: "18 months",
        category: "Residential",
        image: ecommerce,
        bgColor: "#1d4c57", // Dark teal
    },
    {
        id: 3,
        title: "Urban Hub Mixed-Use",
        description: "A vibrant mixed-use development combining retail, office spaces, and residential units.",
        duration: "24 months",
        category: "Mixed-Use",
        image: mooncosmetics,
        bgColor: "#4a2b3c", // Dark red
    },
    {
        id: 4,
        title: "Cloth Shop",
        description: "An ecommerce project developed during an internship at Zorg IT.",
        duration: "6 months",
        category: "Ecommerce",
        image: realestate,
        bgColor: "#1e3a5f", // Dark blue
    },
    {
        id: 5,
        title: "Stationary Website",
        description: "A project developed for a local client, focusing on frontend development.",
        duration: "8 months",
        category: "Commercial",
        image: stationary,
        bgColor: "#3a2f1e", // Dark brown
    },
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
        <section ref={targetRef} className="relative h-[800vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div ref={containerRef} style={{ x }} className="flex gap-6 px-[35vw]">
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
    duration: string;
    category: string;
    image: StaticImageData;
    bgColor: string;
}

interface ProjectCardProps extends ProjectItem {
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectItem & { onClick: () => void }> = ({
    title,
    description,
    duration,
    category,
    image,
    onClick,
}) => {
    // Motion variants for image scaling
    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.15 },
    };

    const overlayVariants = {
        initial: { opacity: 0 },
        hover: { opacity: 1 },
    };

    return (
        <motion.div
            className="w-[50vw] flex-shrink-0 p-2 group"
            initial="initial"
            whileHover="hover" // triggers children variants
        >
            <div className="h-[90vh] rounded-xl shadow-md relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image with scale animation */}
                <motion.div
                    className="relative w-full h-full"
                    variants={imageVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                    />
                </motion.div>

                {/* Overlay content */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 backdrop-blur-md text-white p-6"
                    variants={overlayVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <h3 className="text-2xl font-semibold text-center">{title}</h3>
                    <p className="text-sm line-clamp-4 text-center mt-2">{description}</p>
                    <div className="flex items-center gap-4 text-sm mt-4">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span>{category}</span>
                        </div>
                    </div>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mt-6 transition-all duration-300"
                        onClick={onClick}
                    >
                        View Project <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};


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
            style={{ background: projects[activeIndex].bgColor }}
            className="py-12 transition-colors duration-300"
        >
            <HorizontalScrollCarousel>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        duration={project.duration}
                        category={project.category}
                        image={project.image}
                        bgColor={project.bgColor}
                        onClick={() => handleCardClick(project)}
                    />
                ))}
            </HorizontalScrollCarousel>
        </motion.section>
    );
}