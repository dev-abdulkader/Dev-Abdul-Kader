"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomCrossBar: React.FC = () => {
  return (
    <motion.div
      className="relative size-24   rounded-full cursor-pointer bg-[#FF2645] shadow-md flex items-center justify-center"
      whileHover="hovered"
    >
      {/* Top Line */}
      <motion.span
        className="absolute w-14 h-[1.5px] bg-white origin-center "
        initial={{ rotate: 45 }}
        variants={{
          hovered: { rotate: 0 }, // Define animation on hover
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom Line */}
      <motion.span
        className="absolute w-14 h-[1.5px] bg-white origin-center"
        initial={{ rotate: -45 }}
        variants={{
          hovered: { rotate: 0 }, // Define animation on hover
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CustomCrossBar;
