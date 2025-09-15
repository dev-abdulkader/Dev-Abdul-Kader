"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Social from "./social"
import VerticalBarsNoise from "./vertical-bars"
import { TextEffect } from "../core/text-effect"

export default function Hero() {
    return (
        <div className="bg-black ">
            <div className="absolute bottom-0 left-0 -inset-0 right-0 opacity-15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
                <VerticalBarsNoise />
            </div>
            <div className="relative min-h-screen  max-w-7xl mx-auto px-5 py-20">

                {/* Main Content */}
                <div className="relative ">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl md:text-8xl lg:text-9xl font-black leading-[1.3] md:leading-none mb-8">
                            <TextEffect per="char"  preset="shake" as="span"
                                className="text-white block" >FULL STACK</TextEffect>

                            <TextEffect per="char" preset="blur" as="span"
                                className="text-gray-600/60 block" >DEVELOPER</TextEffect>

                        </h1>

                        <Social />
                    </div>

                    {/* Right Column */}
                    <div className="flex lg:absolute max-w-lg flex-col justify-center right-0 lg:top-[75%]">
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

                <div className=" pt-8">
                    <div className="mb-4">
                        <span className="text-green-400 text-sm font-mono">{"<Success & Achievements>"}</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">97</div>
                            <div className="text-gray-400 text-sm">
                                Completed
                                <br />
                                Projects
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">6+</div>
                            <div className="text-gray-400 text-sm">
                                Years in
                                <br />
                                Development
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">17+</div>
                            <div className="text-gray-400 text-sm">
                                Clients
                                <br />
                                Worldwide
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
                            <div className="text-gray-400 text-sm">
                                Users on My Built
                                <br />
                                Platforms
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
