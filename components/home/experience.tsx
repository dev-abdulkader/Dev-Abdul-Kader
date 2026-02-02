

'use client'

import { CheckCircle } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "LabFry Technology",
    period: "Apr 2025 - Present",
    position: "Full Stack Developer",
    description:
      "Responsible for building full-stack applications for Dinmajur.com and Deshi Design, including frontend, backend, admin dashboards, CI/CD, and deployment.",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Socket.IO",
      "CI/CD",
    ],
    responsibilities: [
      "Led full-stack development from architecture to deployment using Next.js and Node.js",
      "Built scalable admin dashboards with role-based access control",
      "Implemented real-time features using Socket.IO",
      "Handled CI/CD pipelines, deployment, monitoring, and hosting",
      "Integrated notifications using OneSignal and payment gateways (SSLCommerce)",
      "Developed booking, delivery, and order management systems",
      "Collaborated with designers and product teams to ship production-ready features",
      "Implemented smooth UI animations with Framer Motion & GSAP",
    ],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "SM Technology",
    period: "Dec 2024 - Mar 2025",
    position: "Backend Developer",
    description:
      "Worked on various client projects including car rental, flight booking, e-commerce, B2B wholesale, appointment booking, social media, and repair management systems.",
    skills: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Stripe",
      "PayPal",
      "Redux Toolkit",
      "CI/CD",
    ],
    responsibilities: [
      "Designed RESTful APIs with proper authentication and authorization",
      "Optimized databases for performance and scalability (PostgreSQL & MongoDB)",
      "Integrated payment systems: PayPal and Stripe",
      "Implemented real-time chat and notifications with Socket.IO",
      "Developed backend for  booking, e-commerce, social media, repair management",
      "Worked closely with frontend teams for seamless API integration",
      "Ensured security, data validation, and error handling",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "ZORG IT GROUP",
    period: "Jul 2024 - Dec 2024",
    position: "Frontend Developer",
    description:
      "Built responsive, interactive, and user-friendly frontend interfaces for client projects, including e-commerce, admin dashboards, real estate, and interior design websites.",
    skills: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "API Integration",
      "JavaScript",
      "CSS",
    ],
    responsibilities: [
      "Developed responsive UI components and pages using React & Next.js",
      "Implemented smooth animations with Framer Motion & GSAP",
      "Integrated APIs for dynamic content and real-time data",
      "Built admin dashboards, e-commerce websites, and client-facing platforms",
      "Translated Figma designs into pixel-perfect, interactive UI",
      "Ensured cross-browser and mobile compatibility",
      "Optimized performance and accessibility for large-scale projects",
    ],
  },
];





export default function Experience() {
  return (
    <section className="py-20  bg-background">
      <div className="max-w-6xl px-5 mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex justify-center items-center flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Experience</span> That Shaped Me
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            A journey of building, learning, and creating impactful digital
            solutions. Here's my professional experience in web and mobile development.
          </p>
        </div>

        {/* Experiences Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute hidden md:inline left-8 top-20 w-1 h-20 bg-gradient-to-b from-accent/60 to-accent/0" />
              )}

              {/* Timeline Dot */}
              <div className="absolute hidden md:flex left-0 top-2 w-16 h-16 items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-background absolute z-10" />
                <div className="w-12 h-12 bg-accent/10 rounded-full" />
              </div>

              {/* Experience Card */}
              <div className="md:ml-24 pb-8 border-l-2 border-border pl-6 hover:border-[#808] transition-colors">
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
                {/* Responsibilities */}
                <ul className="mb-5 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

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
