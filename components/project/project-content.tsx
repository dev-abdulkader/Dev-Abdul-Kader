'use client';

import { ProjectDetails } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Code2, Lightbulb, Target } from 'lucide-react';

interface ProjectContentProps {
    project: ProjectDetails;
}

export function ProjectContent({ project }: ProjectContentProps) {
    return (
        <div className="mx-auto max-w-6xl space-y-12 px-5">
            {/* Overview Section */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    {project.overview}
                </p>
            </section>

            {/* Role Section */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Role</h2>
                <p className="text-lg text-muted-foreground">{project.role}</p>
            </section>


            {/* Tech Stack Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2">
                    <Code2 className="h-6 w-6" />
                    <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (

                        <span className="inline-flex items-center gap-1 bg-violet-100 text-accent font-semibold text-sm px-2 py-1 rounded-full mx-1">

                            {tech}
                        </span>

                    ))}
                </div>
            </section>


            {/* Features Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
                </div>
                <div className="grid gap-3">
                    {project.features.map((feature, index) => (
                        <div key={index} className="flex gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <p className="text-muted-foreground">{feature}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Challenges Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6" />
                    <h2 className="text-3xl font-bold tracking-tight">Challenges & Solution</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="space-y-3 border shadow-none bg-white p-6">
                        <h3 className="font-semibold">Challenges</h3>
                        <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary">•</span>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="space-y-3 border shadow-none bg-white p-6">
                        <h3 className="font-semibold">Solution</h3>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </Card>
                </div>
            </section>


            {/* Results Section */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Results & Impact</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {project.results.map((result, index) => (
                        <Card
                            key={index}
                            className="border shadow-none bg-white bg-white p-6"
                        >
                            <p className="font-semibold">{result}</p>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
