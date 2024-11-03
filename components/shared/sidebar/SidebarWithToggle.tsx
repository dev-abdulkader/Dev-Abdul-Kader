"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 z-50  h-screen w-[95%] sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-8 border-b">
        <h2 className="text-lg font-bold space-grotesk-700">Md Abdul Kader</h2>
        <button onClick={onClose} className="text-lg">
          <svg
            width="40" // Adjust size as needed
            height="40" // Adjust size as needed
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="p-8">
        <h2 className="space-grotesk-700 pb-3 text-xl">Welcome </h2>
        <p className="merriweather-regular  leading-relaxed">
          Contact Me today to discuss how we can help bring your ideas to life
          and drive your business forward.
        </p>
      </div>
      <div className="px-8">
        <p className="mb-2 space-grotesk-700 text-xl">My Address</p>
        <div className="merriweather-regular leading-relaxed">
          <p>Dhaka, Bangladesh</p>
        </div>

        <p className="mt-4 mb-2 space-grotesk-700 text-xl">Social Media</p>
        <ul className="merriweather-regular leading-relaxed">
          <li>
            <a
              href="https://www.facebook.com/abd.joni.9"
              className="text-blue-600"
            >
              Facebook
            </a>
          </li>
          {/* <li>
            <a href="#" className="text-blue-600">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600">
              Instagram
            </a>
          </li> */}
          <li>
            <a
              href="https://www.linkedin.com/in/md-abdul-kader-852871202/"
              className="text-blue-600"
            >
              LinkedIn
            </a>
          </li>
          <li>abdulemail789@gmail.com</li>
        </ul>

        {/* <p className="mt-4 mb-2 space-grotesk-700 text-xl">Get in Touch</p>
        <ul className="merriweather-regular leading-relaxed">
          <li>
            <a href="#" className="text-blue-600">
              Hire Me
            </a>
          </li>
        </ul> */}
      </div>
      <div className="absolute bottom-0 flex flex-col w-full p-8">
        <a
          href="https://m.me/abd.joni.9"
          className="w-full py-3 bg-blue-500 text-white text-center space-grotesk-700 dark:bg-blue-700"
        >
          Messenger Live Chat
        </a>
      </div>
    </div>
  );
};

const SidebarWithToggle: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* SVG Icon to Open/Close Sidebar */}
      <div
        className="flex items-center space-x-5 border border-black py-3 px-8 rounded-md cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaBarsStaggered />
        <span className="">Media</span>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default SidebarWithToggle;
