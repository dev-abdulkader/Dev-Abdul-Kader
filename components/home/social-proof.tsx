'use client'

import Marquee from 'react-fast-marquee'

export default function SocialProofMarquee() {
    const projects = [
        { id: 1, name: 'Dinmajur' },
        { id: 2, name: 'Radhbo' },
        { id: 3, name: 'Hypetownbd' },
        { id: 4, name: 'Loomwave' },
        { id: 5, name: 'Fig-byte' },
        { id: 6, name: 'RepairMaster' },
        { id: 7, name: 'Peoplance' },
        { id: 8, name: 'Tailortwit' },
        { id: 9, name: 'Dinmajur' },
        { id: 10, name: 'Radhbo' },
        { id: 11, name: 'Hypetownbd' },
        { id: 12, name: 'Loomwave' },
        { id: 13, name: 'Fig-byte' },
        { id: 14, name: 'RepairMaster' },
        { id: 15, name: 'Peoplance' },
        { id: 16, name: 'Tailortwit' },
    ]

    return (
        <section className="w-full bg-background py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                        I’ve built platforms for
                        <span className="text-accent"> businesses and services</span> that create jobs and simplify lives.
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 text-balance">
                        From services and delivery platforms to e-commerce, HRMS, repair, and tailor management systems.
                    </p>
                </div>

                {/* Marquee */}
                <Marquee gradient={false} speed={50} className="flex items-center gap-12">
                    {projects.map((project, index) => (
                        <div key={project.id} className="flex items-center gap-4">
                            <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground">
                                {project.name}
                            </span>

                            <svg className="w-16 h-16 md:w-20 md:h-20 mx-6"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><path d="M450 210A180 180 0 0 1 270 30a30 30 0 1 0-60 0A180 180 0 0 1 30 210a30 30 0 1 0 0 60 180 180 0 0 1 180 180 30 30 0 1 0 60 0 180 180 0 0 1 180-180 30 30 0 1 0 0-60Z" fill="#808"></path></svg>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
