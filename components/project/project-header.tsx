'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ProjectDetails } from '@/lib/projects';

interface ProjectHeaderProps {
  project: ProjectDetails;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="w-full border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="space-y-6">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="outline">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </Button>
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
            )}
            {project.links.case && (
              <a href={project.links.case} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Read Case Study</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
