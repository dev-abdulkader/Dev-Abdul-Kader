"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import AnimatedWord from "../motion/AnimatedWord";

interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    type: string;
    description: string[];
    skills: string[];
}

const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "LabFry Technology",
        duration: "Apr 2025 - Present",
        location: "Chattogram, Bangladesh • On-site",
        type: "Full-time",
        description: [
            "Developed and maintained full-stack applications using Next.js and Node.js.",
            "Contributed to scalable web solutions with a focus on performance and user experience."
        ],
        skills: ["Next.js", "Node.js", "TypeScript", "React", "MongoDB", "Express.js"]
    },
    {
        title: "Junior Backend Developer",
        company: "SM Technology",
        duration: "Dec 2024 - Mar 2025",
        location: "Dhaka, Bangladesh • On-site",
        type: "Full-time",
        description: [
            "Developed and maintained backend services using Node.js, Express.js, Prisma, Mongoose, and MongoDB.",
            "Implemented robust authentication and authorization systems, including token-based and OTP-based flows.",
            "Integrated third-party payment gateways and external API services for dynamic data interactions.",
            "Built real-time features such as chat functionality and live updates using Socket.IO (WebSockets).",
            "Designed and managed RESTful APIs for both frontend and third-party integration.",
            "Worked on full-stack development with Next.js for frontend and Express.js for backend logic.",
            "Contributed to a scalable B2B platform, handling key modules like onboarding, dashboard, and communication tools.",
            "Developed a booking system application with scheduling, calendar integration, and admin panel management.",
            "Built a comprehensive management system, including dashboards, user roles, and real-time data insights.",
            "Collaborated in an agile environment, ensuring timely delivery and clean, maintainable code."
        ],
        skills: ["Node.js", "Express.js", "Prisma", "Mongoose", "MongoDB", "Socket.IO"]
    },
    {
        title: "Frontend Developer",
        company: "ZORG IT GROUP",
        duration: "Oct 2024 - Dec 2024",
        location: "Dhaka, Bangladesh • Remote",
        type: "Full-time",
        description: [
            "Developed responsive and intuitive user interfaces using React.js and Next.js.",
            "Collaborated with a talented team to create amazing user experiences."
        ],
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "MERN Stack Intern",
        company: "ZORG IT GROUP",
        duration: "Jul 2024 - Oct 2024",
        location: "Dhaka, Bangladesh • Remote",
        type: "Full-time",
        description: [
            "Gained hands-on experience in full-stack web development using MongoDB, Express.js, React, and Node.js.",
            "Collaborated remotely with a team of developers, contributing to various projects by writing clean, efficient code.",
            "Implemented best practices in both front-end and back-end development."
        ],
        skills: ["React.js", "MongoDB", "Express.js", "Node.js", "JavaScript"]
    }
];

export default function Experiences() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-16 dark-gradient text-gray-100">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl  md:text-7xl my-10 text-white text-center">
                    My Experiences
                </h2>
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="lg:py-6 lg:pr-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div
                                        className={`flex items-center justify-center size-14 border-2 rounded-full bg-[#252526] cursor-pointer ${selectedIndex === index ? "border-[#569cd6]" : "border-[#3c3c3c]"
                                            }`}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <div className={`flex items-center justify-center size-14 border-2 rounded-full bg-[#252526] cursor-pointer ${selectedIndex === index ? "border-[#569cd6]" : "border-[#3c3c3c]"
                                            }`}>
                                            <Briefcase className={`w-5 h-5 ${selectedIndex === index ? "text-[#4ec9b0]" : "text-[#858585]"}`} />
                                        </div>
                                    </div>
                                    {index < experiences.length - 1 && (
                                        <div className="w-px h-full bg-[#3c3c3c]" />
                                    )}
                                </div>
                                <div className="pb-5 w-full">
                                    <Card
                                        className={`bg-[#252526] border-[#3c3c3c] flex-1 cursor-pointer hover:bg-[#2a2a2a] transition-colors ${selectedIndex === index ? "border-[#569cd6]" : ""
                                            }`}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <CardContent className="p-5">
                                            <p className="text-lg font-bold text-[#ce9178]">
                                                {exp.title} at <span className="text-[#4ec9b0]">{exp.company}</span>
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-[#858585] text-sm mt-2">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4 text-[#4ec9b0]" />
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4 text-[#4ec9b0]" />
                                                    {exp.location}
                                                </span>
                                                <Badge className="bg-[#264f78] text-[#d4d4d4] border-none">{exp.type}</Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:py-6 lg:pl-16">
                        <Card className="bg-[#252526] border-[#3c3c3c]">
                            <CardContent className="p-6">
                                <h3 className="text-4xl font-bold text-white inter  mb-4">Responsibilities</h3>
                                <ul className=" space-y-2 text-[#d4d4d4]">
                                    {experiences[selectedIndex].description.map((desc, i) => (
                                        <li key={i} className="bg-[#0A0A0A] font-geist border p-2.5 border-slate-800 rounded-md">{desc}</li>
                                    ))}
                                </ul>
                                <ul>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {experiences[selectedIndex].skills.map((skill, i) => (
                                            <Badge key={i} className="bg-[#264f78] text-[#d4d4d4] border-none py-1">{skill}</Badge>
                                        ))}
                                    </div>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}