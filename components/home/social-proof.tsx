'use client'

import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function SocialProofMarquee() {
    const projects = [
        { id: 1, name: 'Dinmajur', logo: '/logos/dinmajur.png', link: 'https://dinmajur.com' },
        { id: 2, name: 'Radhbo', logo: '/logos/radhbo.png', link: 'https://radhbo.com' },
        { id: 3, name: 'Gotimala', logo: '/logos/gotimala.png', link: 'https://gotimala.com' },
        { id: 4, name: 'Hypetownbd', logo: '/logos/hypetownbd.png', link: 'https://hypetownbd.com' },
        { id: 5, name: 'Loomwave', logo: '/logos/loomwave.png', link: 'https://loomwaveintl.com' },
        { id: 6, name: 'Nexsoit', logo: '/logos/nexsoit.png', link: 'https://nexsoit.com' },
        { id: 7, name: 'Fig-byte', logo: '/logos/figbyte.png', link: 'https://fig-byte.com' },

        { id: 8, name: 'Dinmajur', logo: '/logos/dinmajur.png', link: 'https://dinmajur.com' },
        { id: 9, name: 'Radhbo', logo: '/logos/radhbo.png', link: 'https://radhbo.com' },
        { id: 10, name: 'Gotimala', logo: '/logos/gotimala.png', link: 'https://gotimala.com' },
        { id: 11, name: 'Hypetownbd', logo: '/logos/hypetownbd.png', link: 'https://hypetownbd.com' },
        { id: 12, name: 'Loomwave', logo: '/logos/loomwave.png', link: 'https://loomwaveintl.com' },
        { id: 13, name: 'Nexsoit', logo: '/logos/nexsoit.png', link: 'https://nexsoit.com' },
        { id: 14, name: 'Fig-byte', logo: '/logos/figbyte.png', link: 'https://fig-byte.com' },
    ]

    return (
        <section className="w-full bg-background pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                        <span className="text-accent">Platforms</span> I’ve Built
                    </h2>
                    <p className="text-lg max-w-4xl mx-auto text-muted-foreground mb-8 text-balance">
                        Over the years, I’ve worked with delivery platforms, e-commerce companies, digital agencies, and software teams to build scalable products.
                    </p>



                </div>

                {/* Marquee */}
                <Marquee gradient={false} speed={50} className="flex items-center">
                    {projects.map((project) => (
                        <a target="_blank" href={`${project.link}`} key={project.id} className="flex rounded-md overflow-hidden border border-gray-100 items-center mr-10">
                            <img
                                src={project.logo}
                                alt={project.name}
                                className="h-40 w-full object-cover"
                            />
                        </a>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}