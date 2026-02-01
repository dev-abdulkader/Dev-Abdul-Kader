'use client';

import { Cloud, Database, Code2, Github, GitBranch, Zap, Server, Lock, Terminal, Cpu } from 'lucide-react';

const technologies = [
    { name: 'AWS', icon: '☁️', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Blender', icon: '🎨', color: 'bg-blue-100 text-blue-700' },
    { name: 'Blender', icon: '🎬', color: 'bg-purple-100 text-purple-700' },
    { name: 'AWS', icon: '☁️', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'C++', icon: '<>', color: 'bg-pink-100 text-pink-700' },
    { name: 'Google Cloud', icon: '☁️', color: 'bg-blue-100 text-blue-700' },
    { name: 'Django', icon: '🐍', color: 'bg-green-100 text-green-700' },
    { name: 'CSS', icon: '🎨', color: 'bg-orange-100 text-orange-700' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-700' },
    { name: 'Expo', icon: '📱', color: 'bg-slate-100 text-slate-700' },
    { name: 'Figma', icon: '✎', color: 'bg-purple-100 text-purple-700' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-100 text-orange-700' },
    { name: 'Curl', icon: '〰️', color: 'bg-red-100 text-red-700' },
    { name: 'Git', icon: '⎇', color: 'bg-gray-100 text-gray-700' },



];

export default function TechStack() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                        Technologies I Work With
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        Here are some of the technologies and tools I frequently use to build robust and scalable applications.
                    </p>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            <div className="rounded-2xl bg-white shadow-none hover:shadow-md transition-all duration-300 p-4 aspect-square flex flex-col items-center justify-center border border-gray-200 hover:border-gray-300">
                                <div className="text-3xl mb-2">{tech.icon}</div>
                                <span className="text-xs text-gray-600 text-center group-hover:text-gray-800 transition-colors font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
