

'use client'

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "LabFry Technology",
    period: "Apr 2025 - Present",
    position: "Full Stack Developer",
    description:
      "Developed full-stack web applications, building scalable solutions with modern technologies and frameworks.",
    skills: ["React", "Node.js", "Next.js"],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "SM Technology",
    period: "Dec 2024 - Mar 2025",
    position: "Backend Developer",
    description:
      "Designed backend systems, focusing on API development, database optimization, and high-performance applications.",
    skills: ["Node.js", "PostgreSQL", "API Design"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "ZORG IT GROUP",
    period: "Jul 2024 - Dec 2024",
    position: "Frontend Developer",
    description:
      "Built responsive and user-friendly interfaces ensuring seamless user experience across devices.",
    skills: ["React", "CSS", "JavaScript"],
  },
]

export default function Experiences() {
  return (
    <section className="py-20  bg-background">
      <div className="max-w-6xl px-5 mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A journey of building, learning, and creating impactful digital
            solutions. Here's my professional experience in web development.
          </p>
        </div>

        {/* Experiences Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-20 bg-gradient-to-b from-accent/60 to-accent/0" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-background absolute z-10" />
                <div className="w-12 h-12 bg-accent/10 rounded-full" />
              </div>

              {/* Experience Card */}
              <div className="ml-24 pb-8 border-l-2 border-border pl-6 hover:border-[#808] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-card text-foreground/70 rounded-full border border-border hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
