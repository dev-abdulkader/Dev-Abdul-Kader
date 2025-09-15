"use client";
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { TimelineContent } from "../motion/timeline-animation";

type ExperienceItem = {
    company: string;
    year: string;
    position: string;
    answer: string;
};

const experienceData: ExperienceItem[] = [
    {
        company: "LabFry Technology",
        year: "Apr 2025 - Present",
        position: "Full Stack Developer",
        answer:
            "Developed and maintained full-stack web applications, leveraging modern frameworks and technologies to deliver scalable solutions for clients.",
    },
    {
        company: "SM Technology",
        year: "Dec 2024 - Mar 2025",
        position: "Backend Developer",
        answer:
            "Designed and implemented robust backend systems, focusing on API development and database optimization to support high-performance applications.",
    },
    {
        company: "ZORG IT GROUP",
        year: "Jul 2024 - Dec 2024",
        position: "Frontend Developer",
        answer:
            "Crafted responsive and user-friendly interfaces using modern frontend frameworks, ensuring seamless user experiences across devices.",
    },
];

export default function Experience() {
    const heroRef = useRef<HTMLDivElement>(null);
    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(20px)",
            y: 40,
            opacity: 0,
        },
    };
    return (
        <div className="sm:p-10 p-5 mx-auto bg-[#f7f7f7] min-h-screen w-full shadow-sm flex flex-col justify-center">
            <div className="max-w-7xl mx-auto" ref={heroRef}>
                <Accordion defaultValue="item-0">
                    {experienceData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="mb-0 overflow-visible rounded-none bg-transparent w-full"
                        >
                            <TimelineContent
                                key={index}
                                animationNum={index}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="border-t border-neutral-300 py-2"
                            >
                                <AccordionHeader
                                    customIcon
                                    className="hover:no-underline p-0 flex flex-col sm:flex-row sm:gap-4 gap-2 py-2 relative data-[active]:bg-transparent hover:bg-transparent text-black sm:text-base text-sm"
                                >
                                    <span className="font-medium lg:text-7xl md:text-6xl 2xl:text-8xl text-4xl uppercase">
                                        {item.company}
                                    </span>
                                    <div className="flex items-center space-x-2 sm:gap-10 gap-2 sm:w-80 w-full sm:justify-between justify-start">
                                        <span className="flex flex-col space-y-2">
                                            <span className="text-xs lg:text-base md:text-sm italic font-normal">
                                                ({item.year})
                                            </span>
                                            <span className="lg:text-xl md:text-base text-sm uppercase font-medium">
                                                {item.position}
                                            </span>
                                        </span>
                                        <span className="relative group-data-[active]:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                                            <Plus className="group-data-[active]:rotate-90 transition-all duration-300 z-10" />
                                        </span>
                                    </div>
                                </AccordionHeader>
                            </TimelineContent>
                            <TimelineContent
                                animationNum={index}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                            >
                                <AccordionPanel
                                    className="space-y-4 w-full mx-auto bg-[#f7f7f7] data-[active]:bg-[#f7f7f7] px-0"
                                    articleClassName="pt-2 px-0 bg-[#f7f7f7] sm:w-80 w-full ml-auto"
                                >
                                    <p className="text-xs sm:text-base">{item.answer}</p>
                                </AccordionPanel>
                            </TimelineContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}