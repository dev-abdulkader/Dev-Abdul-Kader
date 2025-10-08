"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const navItems = [
        "HOME",
        "PROFESSIONAL EXPERIENCE",
        "PROJECTS",
        "BLOG",
        "CONTACT ME",
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="bg-gradient-to-b opacity-80 from-black via-black to-red-950 to-red-900 text-white border text-white sm:text-4xl text-2xl font-bold border-gray-400 rounded-lg italic px-2">ABDUL.IO</div>


                {/* Custom Hamburger Icon */}
                <button
                    className="flex flex-col justify-between w-8 h-4 relative focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
                >
                    {isSidebarOpen ? (
                        null
                    ) : (
                        <>
                            <span className="block h-[1.5px] w-full bg-white rounded"></span>
                            <span className="block h-[1.5px] w-3/4 bg-white rounded "></span>
                            <span className="block h-[1.5px] w-full bg-white rounded"></span>
                        </>
                    )}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 sm:w-80 lg:w-96 bg-[#f7f7f7] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Icon */}
                <button
                    className="absolute top-4 right-4 text-2xl p-2 focus:outline-none text-gray-800"
                    onClick={toggleSidebar}
                    aria-label="Close sidebar"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-start w-64 p-6 space-y-6 mt-16">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-lg font-medium text-gray-800 hover:underline"
                            onClick={toggleSidebar}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleSidebar}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
