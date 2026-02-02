'use client'

import React, { useState } from "react"
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({ email: '', message: '' })
    const [response, setResponse] = useState("Send Message")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResponse('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed');

            setResponse('Message Sent ✓');
            setFormData({ email: '', message: '' });
            setTimeout(() => setResponse('Send Message'), 3000);
        } catch {
            setResponse('Sending Failed ❌');
            setTimeout(() => setResponse('Send Message'), 3000);
        }
    };

    return (
        <footer className="w-full border-t border-[var(--border)] pb-12 lg:pb-0">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                            Is there a fascinating <span className="italic text-[var(--accent)]">project</span> brewing in your mind?
                        </h2>

                        <p className="text-[var(--muted-foreground)]">
                            Have a project, idea, or collaboration in mind? Let's build something impactful.
                        </p>

                        <div className="flex gap-4 text-[var(--foreground)]">
                            <a
                                href="https://www.linkedin.com/in/md-abdul-kader-852871202/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-[var(--accent)] transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>

                            <a
                                href="https://github.com/dev-abdulkader/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-[var(--accent)] transition-colors"
                            >
                                <Github size={24} />
                            </a>

                            <a
                                href="mailto:devabdulkader@gmail.com"
                                aria-label="Email"
                                className="hover:text-[var(--accent)] transition-colors"
                            >
                                <Mail size={24} />
                            </a>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="border border-[var(--border)] rounded-2xl bg-[var(--card)] p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div>
                                <label className="text-[var(--muted-foreground)]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg outline-none bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                                />
                            </div>

                            <div className="">
                                <label className="text-[var(--muted-foreground)] ">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Your Message..."
                                    className="w-full px-4 py-2 mt-2 border rounded-lg outline-none bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2.5 rounded-lg text-white transition-all
                                    ${response === "Sending..." ? "bg-gray-500" :
                                        response.includes("Sent") ? "bg-green-600" :
                                            response.includes("Failed") ? "bg-red-500" :
                                                "bg-[var(--accent)]"}
                                `}
                            >
                                {response}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </footer>
    )
}
