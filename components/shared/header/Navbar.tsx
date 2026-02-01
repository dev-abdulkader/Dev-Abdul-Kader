"use client";

import Link from "next/link";
import { SlBriefcase } from "react-icons/sl";
import { BsFolder } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/home", icon: FiHome },
        { name: "Experience", href: "/experience", icon: SlBriefcase },
        { name: "Work", href: "/work", icon: BsFolder },
        { name: "Blog", href: "/blog", icon: IoNewspaperOutline },
        { name: "Contact", href: "/contact", icon: CiMail },
    ];

    return (
        <>
            {/* TOP NAVBAR (DESKTOP) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-lg border-b border-white/20 transition-all">
                <div className="max-w-6xl mx-auto py-4 px-5 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="bg-gradient-to-b opacity-80 from-black via-black to-red-950 text-white border sm:text-4xl text-2xl font-bold border-gray-400 rounded-lg italic px-2">
                        ABDUL.IO
                    </Link>

                    {/* Desktop Menu with Icons */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-2 text-md capitalize hover:text-accent text-gray-800 hover:text-black transition"
                                >
                                    <Icon size={16} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* BOTTOM MOBILE NAVBAR */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden w-full">
                <div className="bg-white/20 backdrop-blur-xl border-t border-white/30 px-4 py-2 flex justify-around">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex flex-col items-center text-xs text-gray-800 hover:text-black transition hover:bg-white/30 px-2 py-1 rounded-lg"
                            >
                                <Icon size={20} />
                                <span className="text-[11px]">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;