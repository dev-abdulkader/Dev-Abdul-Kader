"use client";
import { useEffect, useRef, useState } from "react";
import "./menu.css";
import Link from "next/link";
import { gsap } from "gsap";
import BurgerMenu from "./BurgerMenu";

const menuLinks = [
  { path: "/", label: "Md Abdul Kader" },
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
        })
        .to(".menu-link", {
          top: "0rem",
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
    <div className="relative  z-50" ref={container}>
      <div className="menu-bar fixed right-20 top-10 z-10  ">
        <div className="menu-open cursor-pointer text-white  burger-menu">
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <div
        className="menu-overlay h-screen w-screen fixed top-0 left-0 bg-[#c5fb45]  z-[1] px-20   pb-10 flex flex-col justify-between overflow-auto"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div
          className="menu-links flex flex-col 
      pt-40 md:pt-0 w-full"
        >
          {menuLinks.map((link, index) => (
            <div key={index} className="w-full" onClick={toggleMenu}>
              <div className="menu-link-item-holder py-5 w-full border-b-2 border-black overflow-hidden">
                <Link
                  href={link.path}
                  className="menu-link font-geist text-7xl md:text-[7rem] w-full block text-center relative top-[8rem] " // Add top value to make it hide
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
