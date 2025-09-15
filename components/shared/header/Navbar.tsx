"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 h-20 z-50 bg-transparent transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="font-mono text-lg font-bold text-white">ABDUL.IO</div>

                {/* Hamburger Icon */}
                <button
                    className="p-2 focus:outline-none text-white text-2xl lg:hidden"
                    onClick={toggleSidebar}
                    aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
                >
                    {isSidebarOpen ? <X size={24} /> : <HiOutlineBars2 size={24} />}
                </button>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#f7f7f7] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
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

                    <div className="flex flex-col items-start p-6 space-y-6 mt-16">
                        {["HOME", "PROFESSIONAL EXPERIENCE", "PROJECTS", "BLOG", "CONTACT ME"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="text-lg font-medium text-gray-800 hover:underline"
                                    onClick={toggleSidebar}
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;