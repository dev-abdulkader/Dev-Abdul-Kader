"use client";
import { useEffect, useRef, useState } from "react";
import "./menu.css";
import Link from "next/link";
import { gsap } from "gsap";
import BurgerMenu from "./BurgerMenu";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#skills", label: "Skills" },
  { path: "#portfolio", label: "Portfolio" },
  { path: "#contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (container.current) {
      // Initialize GSAP animations
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    }

    return () => {
      // Clean up the timeline on component unmount
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="relative border  z-50" ref={container}>
      <div className="menu-bar fixed right-20 top-10 z-10  ">
        <div className="menu-open cursor-pointer text-white  burger-menu">
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <div className="menu-overlay px-20 w-full relative z-50 pb-10 flex flex-col justify-between overflow-auto">
        <div
          className="menu-links flex flex-col 
        pt-40 md:pt-0 w-full"
        >
          {menuLinks.map((link, index) => (
            <div
              key={index}
              className="w-full" // Ensure full width for each item
              onClick={toggleMenu}
            >
              <div className="menu-link-item-holder py-5 w-full border-b-2 border-black">
                <Link
                  href={link.path}
                  className="menu-link font-bonny-regular text-7xl md:text-[7rem] w-full block text-center" // Add block to make it full width
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-between left-0  py-10 w-full">
          <div className="flex flex-col">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook &#8599;
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter &#8599;
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn &#8599;
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram &#8599;
            </a>
          </div>
          <div className="flex flex-col">
            <p>info@gmail.com</p>
            <p>3434343</p>
          </div>
          <div className="flex flex-col">
            <p>View Showreel</p>
            <p>Check Videos</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
