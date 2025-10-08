"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Social from "./social"
import VerticalBarsNoise from "./vertical-bars"
import { useEffect, useRef } from "react"
import TextSplit from "../motion/text-split"

export default function Hero() {
    // const particleContainerRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const container = particleContainerRef.current;
    //     if (!container) return;

    //     // Create all particles once
    //     const totalParticles = 50;
    //     for (let i = 0; i < totalParticles; i++) {
    //         const particle = document.createElement("div");
    //         particle.className = "particle";

    //         // Random size 2-6px
    //         const size = Math.random() * 4 + 2;
    //         particle.style.width = `${size}px`;
    //         particle.style.height = `${size}px`;

    //         // Random horizontal position
    //         particle.style.left = `${Math.random() * 100}vw`;

    //         // Random animation duration 3-7s
    //         const duration = Math.random() * 4 + 3;
    //         particle.style.animationDuration = `${duration}s`;

    //         // Random animation delay so particles are not synchronized
    //         const delay = Math.random() * 7;
    //         particle.style.animationDelay = `${delay}s`;

    //         container.appendChild(particle);
    //     }
    // }, []);

    return (
        <div className="bg-black w-full relative overflow-hidden min-h-screen">
            {/* Particle container */}
            <div
                // ref={particleContainerRef}
                className="absolute inset-0 pointer-events-none z-0"
            ></div>

            {/* Vertical bars noise */}
            <div className="absolute bottom-0 left-0 -inset-0 right-0 opacity-15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
                <VerticalBarsNoise />
            </div>

            {/* Hero content */}
            <div className="relative min-h-screen flex flex-col justify-center h-full max-w-7xl mx-auto px-5 py-20 z-10">
                <h1 className="text-4xl md:text-8xl lg:text-9xl font-black leading-[1.3] md:leading-none mb-8">
                    <TextSplit text="FULL STACK" className="text-white block" />
                    <TextSplit text="DEVELOPER" className="text-gray-600/60 block" />
                </h1>

                <div className="flex flex-col md:flex-row justify-between">
                    <Social />
                    <div className="flex flex-col max-w-lg">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                            Full-stack developer and hacker driven by a passion for building
                            efficient, secure applications. Expertise in web development, with a
                            focus on performance and security, pushing boundaries in code.
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm self-start"
                        >
                            EXPLORE MY WORK
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="pt-8">
                    <div className="mb-4">
                        <span className="text-green-400 text-sm font-mono">{"<Success & Achievements>"}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-gray-400 text-sm">
                                Completed<br />Projects
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2+</div>
                            <div className="text-gray-400 text-sm">
                                Years in<br />Development
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
                            <div className="text-gray-400 text-sm">
                                Companies<br />Worldwide
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
                            <div className="text-gray-400 text-sm">
                                Users on My Built<br />Platforms
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Particle animation CSS */}
            {/* <style jsx>{`
                .particle {
                    position: absolute;
                    bottom: 0;
                    background: white;
                    border-radius: 50%;
                    opacity: 0.3;
                    animation-name: floatUp;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                @keyframes floatUp {
                    0% {
                        transform: translateY(0);
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-120vh);
                        opacity: 0;
                    }
                }
            `}</style> */}
        </div>
    )
}
