"use client";

import React from "react";
import { motion } from "framer-motion";

interface BurgerMenuOpenProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuOpenProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <motion.div
      className={`relative burger-menu size-20 lg:size-32 rounded-full cursor-pointer bg-blue-700 text-white flex items-center justify-center transition-all duration-200 before:absolute before:inset-0 before:m-auto  before:rounded-full before:h-0 before:w-0 before:transition-delay-400 before:bg-blue-700 before:opacity-0 before:transition-all before:duration-300 before:ease-out transform${
        isMenuOpen
          ? "text-white before:h-full before:w-full before:opacity-90 transform scale-100"
          : ""
      }`}
      onClick={toggleMenu}
    >
      {/* Top Line */}
      <motion.span
        className={`absolute w-12 lg:w-24 h-[1.3px] origin-center ${
          isMenuOpen ? "bg-white" : "bg-white"
        }`}
        initial={{ y: -10 }}
        animate={isMenuOpen ? { y: 0, rotate: 45 } : { y: -10, rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom Line */}
      <motion.span
        className={`absolute w-12 lg:w-24 h-[1.3px]  origin-center ${
          isMenuOpen ? "bg-white" : "bg-white"
        }`}
        initial={{ y: 10 }}
        animate={isMenuOpen ? { y: 0, rotate: -45 } : { y: 10, rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BurgerMenu;
