'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Social from './social';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            {/* Navigation */}


            {/* Decorative Elements */}
            <div className="absolute top-20 left-8 w-1 h-12 bg-accent opacity-30"></div>
            <div className="absolute top-32 right-12 w-20 h-20 border border-accent border-opacity-20 rounded-lg opacity-30"></div>
            <div className="absolute bottom-40 left-12 w-2 h-2 bg-accent rounded-full opacity-50"></div>

            {/* Decorative dot grid - right side */}
            <div className="absolute top-0 right-0 w-64 h-96">
                <div className="grid grid-cols-8 gap-2 p-4">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 bg-accent rounded-full opacity-20"
                            style={{
                                animation: `fadeInScale 0.6s ease-out ${i * 0.03}s both`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="relative pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-2xl"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-accent/30 overflow-hidden bg-card">
                                <div className="w-full h-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                                    <Image
                                        src="/profile-image.jpeg"
                                        alt="Profile Image"
                                        width={128}
                                        height={128}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Heading with Code Styling */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Hi, I'm{' '}
                            <span className="text-accent">
                                {'<'}Md Abdul Kader{'>'}
                            </span>
                        </h1>
                    
                    </div>

                    {/* Description */}
                    <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        I’m a software developer building web and mobile platforms that create real-world impact.
                        I’ve built platforms like
                        <span className="inline-block bg-green-100 text-green-800 font-semibold text-sm px-2 py-1 rounded-full mx-1">
                            dinmajur.com
                        </span>
                        and
                        <span className="inline-block bg-green-100 text-green-800 font-semibold text-sm px-2 py-1 rounded-full mx-1">
                            radhbo.com
                        </span>
                        supporting employment and income opportunities.
                    </p>




                    {/* CTA Button */}
                    <div className="flex justify-center mb-8">


                        <Social />

                    </div>


                    <div>
                        <div className="mb-3">
                            <span className="text-green-500 text-sm font-mono">{"<Success & Achievements>"}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">15+</div>
                                <div className="text-gray-600 text-sm">
                                    Completed<br />Projects
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">2+</div>
                                <div className="text-gray-600 text-sm">
                                    Years in<br />Development
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">3</div>
                                <div className="text-gray-600 text-sm">
                                    Companies<br />Worldwide
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">10,000+</div>
                                <div className="text-gray-600 text-sm">
                                    Users on My Built<br />Platforms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Animation styles */}
            <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 0.2;
            transform: scale(1);
          }
        }
      `}</style>
        </div>
    )
}
