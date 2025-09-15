"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hideNav, setHideNav] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const handleScroll = () => {
            setHideNav(window.scrollY > 700); // Hide desktop nav after 500px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 h-20 left-0 right-0 max-w-7xl mx-auto z-30 flex items-center justify-between px-4 sm:px-8 py-6 shadow-sm transition-all duration-300 ">
            {/* Logo */}
            <div className="font-mono text-lg font-bold text-white">ABDUL.IO</div>

            {/* Desktop Navigation Links */}
            <div
                className={`hidden lg:flex text-white items-center space-x-8 text-sm ${hideNav ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                {["HOME", "PROFESSIONAL EXPERIENCE", "PROJECTS", "BLOG", "CONTACT ME"].map(
                    (item, index) => (
                        <a key={index} href="#" className="hover:underline">
                            {item}
                        </a>
                    )
                )}
            </div>

            {/* Hamburger Icon for Mobile & lg-scroll */}
            <button
                className={`p-2 focus:outline-none text-2xl transition-all duration-300
          ${hideNav ? "block bg-red-500 text-white rounded-full lg:block" : "block lg:hidden"}`}
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
                {isSidebarOpen ? <X /> : <HiOutlineBars2 />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#f7f7f7] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Cross Icon on top-right */}
                <button
                    className="absolute top-4 right-4 text-2xl p-2 focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label="Close sidebar"
                >
                    <X />
                </button>

                <div className="flex flex-col items-start p-6 space-y-6 mt-16">
                    {["HOME", "PROFESSIONAL EXPERIENCE", "PROJECTS", "BLOG", "CONTACT ME"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-lg font-medium text-gray-800 hover:underline"
                                onClick={toggleSidebar}
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            </div>

            {/* Overlay for Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
