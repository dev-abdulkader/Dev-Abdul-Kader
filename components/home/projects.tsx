'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Built a full-stack e-commerce platform with real-time inventory management, payment processing, and advanced search functionality. Features include user authentication, product recommendations, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565016d?w=600&h=400&fit=crop',
    link: '#',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    description:
      'Developed a collaborative task management platform with real-time updates, team workspace organization, and analytics dashboard. Integrated with popular calendar and communication tools for seamless workflow.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    link: '#',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'Created an AI-powered content generation tool leveraging large language models for automated writing assistance. Includes content templates, batch processing, and SEO optimization features.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d424f9fb2c5518da9f10c63b?w=600&h=400&fit=crop',
    link: '#',
    tags: ['Next.js', 'AI SDK', 'Vercel'],
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description:
      'Built a comprehensive analytics dashboard with interactive charts, custom reporting, and data visualization. Real-time metrics tracking with WebSocket integration for live data updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '#',
    tags: ['React', 'D3.js', 'Express'],
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4  bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-card text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent font-semibold transition-colors group/link"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
