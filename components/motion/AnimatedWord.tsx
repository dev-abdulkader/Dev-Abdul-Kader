"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the props type for the component
interface AnimatedWordProps {
  text: string; // Expecting a string for the text prop
  className: string;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ text, className }) => {
  return (
    <h1 className={`${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{ scaleY: 1.5 }} // Scale up vertically on hover
          transition={{ duration: 0.2 }}
          className="inline-block origin-bottom cursor-pointer" // Set the origin to the bottom
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedWord;
