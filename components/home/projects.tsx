'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { getAllProjects } from '@/lib/projects';
import { Button } from '../ui/button';



export default function Projects() {
  const projects = getAllProjects();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Projects I'm Proud of
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            I've worked on numerous projects spanning web development, AI integration, and SaaS
            platforms. Here are some of my most significant contributions where I handled design,
            development, and deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg bg-card aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-card text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className='flex items-center justify-between'>


                  <Link
                    href={`/projects/${project.id}`}

                  >
                    <Button className='bg-accent'>
                      View Details
                    </Button>
                  </Link>


                  <a
                    target="_blank"
                    href={project.links.disabled ? undefined : project.links.live}
                    onClick={(e) => project.links.disabled && e.preventDefault()} // Prevent navigation if disabled
                  >
                    <Button
                      variant="ghost"
                      className="gap-2"
                      disabled={project.links.disabled} // Disable the button visually & functionally
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.links.disabled ? "Private" : "View Live"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
