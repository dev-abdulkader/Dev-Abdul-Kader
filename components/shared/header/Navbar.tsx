"use client";
import React, { useState, useRef, useEffect, RefObject } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import SidebarWithToggle from "../sidebar/SidebarWithToggle";

interface SubItem {
  title: string;
  href: string;
}

interface NavigationItem {
  title: string;
  subItems?: SubItem[];
  href?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null); // Create a ref for the dropdown

  // Navigation data
  const navigationData: NavigationItem[] = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Blogs", href: "#blogs" },
  ];

  // Effect to handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown if clicked outside
        setActiveDropdown(null); // Close active dropdown
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-30 bg-white shadow-sm">
      <section>
        <nav
          className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0"
          ref={dropdownRef} // Attach the ref to the dropdown menu
        >
          <div className="flex flex-col px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:h-[8vh] xl:px-20 py-4 lg:py-0">
            <div className="flex items-center h-full ">
              <SidebarWithToggle />
            </div>

            <div
              className={`space-grotesk-500 mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
                isOpen ? "" : "hidden"
              }`}
            >
              {navigationData.map((item, index) => (
                <div key={index} className="relative flex flex-col">
                  <button
                    onClick={() => {
                      if (item.subItems) {
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        );
                      }
                    }}
                    className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg:hover:text-green-700 space-grotesk-500 ${
                      activeDropdown === item.title
                        ? "text-gray-800"
                        : "text-black"
                    }`}
                  >
                    {item.href ? (
                      <Link
                        onClick={() => setIsOpen(false)} // Close menu on link click
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                    {item.subItems && (
                      <svg
                        className={`w-6 h-6 fill-current transition-transform duration-300 ${
                          activeDropdown === item.title
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                      </svg>
                    )}
                  </button>
                  {activeDropdown === item.title && item.subItems && (
                    <div className="z-50 flex w-full flex-col rounded-lg px-5 lg:absolute mt-6 lg:mt-0 lg:top-[4rem] lg:w-96 bg-gray-100 py-5">
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex grow rounded-lg px-5 py-5 items-center gap-5 xl:px-8"
                        >
                          <div>
                            <h2 className="mb-1 text-base font-medium text-black hover:text-green-700">
                              <Link
                                onClick={() => setIsOpen(false)} // Close menu on link click
                                href={`/services/${subItem.href}`}
                              >
                                {subItem.title}
                              </Link>
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`flex flex-col lg:flex lg:flex-row ${
                isOpen ? "" : "hidden"
              }`}
            >
              <div className="py-10 lg:py-0">
                <a
                  href="https://m.me/abd.joni.9"
                  className="mr-2 sm:mr-6  px-4 lg:px-8 py-3  text-center text-base border border-black lg:mr-8 rounded-md"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <button
              className="absolute right-5 top-9 lg:hidden "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars className="text-blue-700 " />
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
