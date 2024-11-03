import React from "react";
import Logo from "../header/Logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import "./footer.css";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";
import TechStack from "./../../home/TechStack";

const Footer = () => {
  return (
    <footer className="footer bg-[#021734]" role="contentinfo">
      <div
        className="social  flex justify-center"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <a
          href="#"
          aria-label="Facebook"
          className="flex justify-center items-center"
        >
          <MdOutlineFacebook />{" "}
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="flex justify-center items-center"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          aria-label="Mastodon"
          className="flex justify-center items-center"
        >
          <CiLinkedin />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="flex justify-center items-center"
        >
          <GrGithub />
        </a>
      </div>
      <div className="h-[2px] bg-slate-400 my-3"></div>
      <ul
        className="footer-links my-10"
        role="navigation"
        aria-labelledby="footer-links-heading"
      >
        <li>
          <a href="#" className="font-bonny-regular text-7xl">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="font-bonny-regular text-7xl">
            About
          </a>
        </li>
        <li>
          <a href="#" className="font-bonny-regular text-7xl">
            TechStack
          </a>
        </li>
        <li>
          <a href="#" className="font-bonny-regular text-7xl">
            Projects
          </a>
        </li>
      </ul>
      <p className="copyright">© 2024 Abdul Kader. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
