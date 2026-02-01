'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    const [formData, setFormData] = useState({ email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setFormData({ email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <footer className="w-full border-t border-border">
            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left - Heading & Text */}
                    <div className="space-y-6">
                        <div>

                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                Is there a fascinating
                                <span className="italic text-accent"> project </span>
                                brewing in your mind?
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Have a project, idea, or collaboration in mind? I'd love to hear from you. Let's create something impactful together.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2.5 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200"
                            >
                                {submitted ? 'Message Sent ✓' : 'Send Message'}
                            </button>

                            {submitted && (
                                <p className="text-sm text-green-600 text-center font-medium">
                                    Thanks for reaching out! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

           
        </footer>
    )
}
