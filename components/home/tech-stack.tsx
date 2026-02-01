'use client';

import {
    SiJavascript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiPrisma,
    SiGraphql,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiGithub,
    SiPostman,
} from 'react-icons/si';

const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-800' },
    { name: 'NestJS', icon: SiNestjs, color: 'text-red-500' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-indigo-500' },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
];

export default function TechStack() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                        Technologies <span className="text-accent">I Use</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        Here are some of the technologies and tools I frequently use to build robust and scalable applications.
                    </p>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="group cursor-pointer">
                                <div className="rounded-2xl bg-white shadow-none hover:shadow-md transition-all duration-300 p-6 aspect-square flex flex-col items-center justify-center border border-gray-200 hover:border-gray-300">
                                    <Icon className={`text-5xl mb-2 ${tech.color}`} />
                                    <span className="text-xs text-gray-600 text-center group-hover:text-gray-800 transition-colors font-medium">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}