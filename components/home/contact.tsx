"use client";
import React, { useState } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import FormTextarea from "../forms/FormTextarea";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import emailjs from "@emailjs/browser";
import MotionTransitionLeft from "../motion/MotionTransitionLeft";
import MotionTransitionRight from "../motion/MotionTransitionRight";

const Contact: React.FC = () => {
    const [response, setResponse] = useState("Send Message");

    const submitHandler = async (data: any) => {
        setResponse("Sending...");
        await emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(
                () => {
                    setResponse("Message Sent");
                    setTimeout(() => setResponse("Send Message"), 2000);
                },
                () => {
                    setResponse("Sending Failed");
                    setTimeout(() => setResponse("Send Message"), 2000);
                }
            );
    };

    return (
        <div className="bg-black overflow-hidden" id="contact">

            <div className="flex md:flex-row flex-col justify-center items-center px-3 py-20 gap-10">
                {/* Left side: Info */}
                <div className="md:w-1/2 w-full">
                    <MotionTransitionLeft>
                        <ContactInfo />
                    </MotionTransitionLeft>
                </div>

                {/* Right side: Form */}
                <main className="md:w-1/2 xl:w-[40vw] 2xl:w-[30vw] w-full p-0">
                    <MotionTransitionRight>
                        <div className="bg-white px-8 md:px-10 py-10 rounded-lg relative w-full h-auto shadow-md">
                            <div className="mb-6">
                                <h2 className="text-4xl md:text-5xl mb-4 font-bonny-medium">
                                    Get in Touch
                                </h2>

                            </div>

                            <Form submitHandler={submitHandler}>
                                <FormInput
                                    name="fullName"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 mb-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
                                />

                                <FormInput
                                    name="phoneNumber"
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    required
                                    className="w-full px-4 py-3 mb-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
                                />

                                <FormInput
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 mb-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
                                />

                                <FormTextarea
                                    name="message"
                                    label="Your Message"
                                    placeholder="Enter your message"
                                    required
                                    className="w-full px-4 py-3 mb-4 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
                                />

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className={`${response === "Sending..."
                                            ? "bg-gray-500"
                                            : response === "Message Sent"
                                                ? "bg-green-600"
                                                : response === "Sending Failed"
                                                    ? "bg-red-500"
                                                    : "bg-slate-800"
                                            } text-white w-[150px] py-2 rounded-lg active:scale-[0.96] transition-all`}
                                    >
                                        {response}
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </MotionTransitionRight>
                </main>
            </div>
        </div>
    );
};

const ContactInfo: React.FC = () => {
    return (
        <div className="text-white font-geist">
            <h2 className="md:text-5xl text-3xl w-3/4 mb-4">
                I am always here to assist you and respond to your inquiries
            </h2>
            <p className="mb-8 w-3/4 text-gray-300">
                Whether you have questions, need assistance, or simply want to share
                your thoughts, I’m eager to hear from you. Feel free to connect with me
                through any of the methods below, and I will get back to you promptly.
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className="mb-1 font-semibold">Contact Number</h3>
                    <p>+8801788838782</p>
                </div>

                <div>
                    <h3 className="mb-1 font-semibold">My Location</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>

                <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p>abdulemail789@gmail.com</p>
                </div>

                <div>
                    <h3 className="mb-1 font-semibold">Social Network</h3>
                    <div className="flex space-x-4 text-xl">
                        <a
                            href="https://www.facebook.com/abd.joni.9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-abdul-kader-852871202/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/abdulkader789"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
