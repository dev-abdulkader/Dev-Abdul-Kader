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
import { HiArrowRight } from "react-icons/hi2";
// Project data
// Project data
const projects = [
    {
        id: 1,
        title: "Skyline Tower Renovation",
        category: "Commercial",
        company: "DinMajur",
        timeline: "Jan 2023 - Dec 2023",
        description:
            "Dinmajur is a modern peer-to-peer platform that connects skilled freelancers with clients.",
        image: dinmajur,
        bgColor: "#f7f7f7",
        liveLink: "https://dinmajur.com",
    },
    {
        id: 2,
        title: "Green Oasis Residential",
        category: "Residential",
        company: "EcoBuild Ltd",
        timeline: "Mar 2022 - Aug 2023",
        description:
            "A luxury residential complex featuring eco-friendly materials and smart home technology.",
        image: ecommerce,
        bgColor: "#1d4c57",
        liveLink: "https://greenoasis.com",
    },
    {
        id: 3,
        title: "Urban Hub Mixed-Use",
        category: "Mixed-Use",
        company: "MoonCosmetics Dev Team",
        timeline: "Jan 2021 - Dec 2022",
        description:
            "A vibrant mixed-use development combining retail, office spaces, and residential units.",
        image: mooncosmetics,
        bgColor: "#4a2b3c",
        liveLink: "https://urbanhub.com",
    },
    {
        id: 4,
        title: "Cloth Shop",
        category: "Ecommerce",
        company: "Zorg IT",
        timeline: "Feb 2022 - Jul 2022",
        description:
            "An ecommerce project developed during an internship at Zorg IT.",
        image: realestate,
        bgColor: "#1e3a5f",
        liveLink: "https://clothshop.com",
    },
    {
        id: 5,
        title: "Stationary Website",
        category: "Commercial",
        company: "Local Client",
        timeline: "Jan 2021 - Aug 2021",
        description:
            "A project developed for a local client, focusing on frontend development.",
        image: stationary,
        bgColor: "#3a2f1e",
        liveLink: "https://stationarywebsite.com",
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

interface ProjectCardProps extends ProjectItem {
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectItem & { onClick: () => void }> = ({
    title,
    description,
    category,
    company,
    timeline,
    liveLink,
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
            {/* Image with scale animation */}
            <div className="  h-[80vh] shadow-md relative overflow-hidden">
                <motion.div
                    className="relative w-full h-full "
                    variants={imageVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className=""
                    />
                </motion.div>


            </div>
            {/* Overlay content */}
            <div
                className="flex justify-between  mt-2   text-white "

            >
                <div className=" flex items-center gap-5">
                    <h3 className="text-md">{title}</h3>
                    <p className="text-sm line-clamp-4 ">{category}</p>
                </div>
                <div className=" flex items-center gap-5">
                    <h3 className="text-md">{company}</h3>
                    <p className="text-sm line-clamp-4 ">{timeline}</p>
                </div>


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
                        category={project.category}
                        company={project.company}
                        timeline={project.timeline}
                        image={project.image}
                        liveLink={project.liveLink}
                        bgColor={project.bgColor}
                        onClick={() => handleCardClick(project)}
                    />
                ))}
            </HorizontalScrollCarousel>
        </motion.section>
    );
}