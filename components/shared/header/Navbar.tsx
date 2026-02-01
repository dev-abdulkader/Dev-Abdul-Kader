"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SlBriefcase } from "react-icons/sl";
import { BsFolder } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/home", icon: FiHome },
        { name: "Experience", href: "/experience", icon: SlBriefcase },
        { name: "Work", href: "/work", icon: BsFolder },
        { name: "Blog", href: "/blog", icon: IoNewspaperOutline },
        { name: "Contact", href: "/contact", icon: CiMail },
    ];

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border-b border-white/20 dark:border-gray-700 transition-all">
                <div className="max-w-6xl mx-auto py-4 px-5 flex items-center justify-between">
                    <Link
                        href="/"
                        className="bg-gradient-to-b opacity-80 from-black via-black to-red-950 text-white border sm:text-4xl text-2xl font-bold border-gray-400 rounded-lg italic px-2"
                    >
                        ABDUL.IO
                    </Link>

                    <div className="hidden md:flex gap-8 items-center">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-2 text-md capitalize text-gray-800 dark:text-gray-200 hover:text-accent transition"
                                >
                                    <Icon size={16} />
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                        >
                            {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
