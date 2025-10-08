"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import MotionOpacity from "../motion/MotionOpacity";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
    img: StaticImageData;
    visitLink: string;
    bgColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, visitLink, bgColor }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <MotionOpacity>
            <div
                className="relative w-[40vw] mr-10  rounded-md h-[500px] md:h-[550px] lg:h-[600px] flex flex-col gap-5 overflow-hidden"
                style={{ backgroundColor: bgColor }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Image */}
                <div className="h-full flex-grow border overflow-hidden w-full rounded-md relative">
                    <Image
                        src={img}
                        height={300}
                        width={300}
                        layout="responsive"
                        className="w-full h-full object-cover rounded-md"
                        alt="project"
                    />

                    {/* Hover Button */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center z-50"
                            >
                                <a
                                    href={visitLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-black/70 backdrop-blur-md rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 text-white text-lg md:text-xl text-center p-4"
                                >
                                    View Website
                                    <ArrowUpRight className="ml-2 w-6 h-6 md:w-7 md:h-7" />
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </MotionOpacity>
    );
};

export default ProjectCard;
