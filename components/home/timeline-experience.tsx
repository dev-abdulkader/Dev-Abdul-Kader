'use client'

import { Briefcase } from 'lucide-react'

type ExperienceItem = {
  company: string
  year: string
  position: string
  description: string
}

const experienceData: ExperienceItem[] = [
  {
    company: "LabFry Technology",
    year: "Apr 2025 - Present",
    position: "Full Stack Developer",
    description:
      "Developed full-stack web applications, building scalable solutions with modern technologies and frameworks.",
  },
  {
    company: "SM Technology",
    year: "Dec 2024 - Mar 2025",
    position: "Backend Developer",
    description:
      "Designed backend systems, focusing on API development, database optimization, and high-performance applications.",
  },
  {
    company: "ZORG IT GROUP",
    year: "Jul 2024 - Dec 2024",
    position: "Frontend Developer",
    description:
      "Built responsive and user-friendly interfaces ensuring seamless user experience across devices.",
  },
]

export default function TimelineExperience() {
  return (
    <section className="px-5 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Companies I’ve worked with and projects I’ve contributed to.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-6 md:ml-10 ">
          {experienceData.map((item, index) => (
            <div key={index} className="flex gap-4 relative ">
              {/* Timeline Dot + Line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent border-2 border-background flex-shrink-0"></div>
                {index < experienceData.length - 1 && (
                  <div className="w-0.5 flex-1 bg-muted-foreground/50"></div>
                )}
              </div>

              {/* Card Content */}
              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium uppercase text-accent">{item.position}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
