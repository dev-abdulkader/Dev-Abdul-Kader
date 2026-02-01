

'use client'

import React, { useState } from "react"
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
// import emailjs from "@emailjs/browser"

export default function Contact() {
    const [formData, setFormData] = useState({ email: '', message: '' })
    const [response, setResponse] = useState("Send Message")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     setResponse("Sending...")

    //     try {
    //         await emailjs.send(
    //             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    //             process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    //             {
    //                 email: formData.email,
    //                 message: formData.message,
    //             },
    //             process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    //         )

    //         setResponse("Message Sent ✓")
    //         setFormData({ email: '', message: '' })

    //         setTimeout(() => setResponse("Send Message"), 3000)

    //     } catch (error) {
    //         console.error("EmailJS Error:", error)
    //         setResponse("Sending Failed ❌")
    //         setTimeout(() => setResponse("Send Message"), 3000)
    //     }
    // }

    return (
        <footer className="w-full border-t border-border">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Is there a fascinating <span className="italic text-accent">project</span> brewing in your mind?
                        </h2>

                        <p className="text-muted-foreground">
                            Have a project, idea, or collaboration in mind? Let's build something impactful.
                        </p>

                        <div className="flex gap-4">
                            <Twitter />
                            <Linkedin />
                            <Github />
                            <Mail />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className=" border border-border rounded-2xl bg-white p-8">
                        <form onSubmit={() => { }} className="space-y-4">

                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-2 outline-none border rounded-lg"
                                />
                            </div>

                            <div>
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 outline-none py-2 border rounded-lg"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2.5 rounded-lg text-white transition-all
                                    ${response === "Sending..." ? "bg-gray-500" :
                                        response.includes("Sent") ? "bg-green-600" :
                                            response.includes("Failed") ? "bg-red-500" :
                                                "bg-[#808]"}
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