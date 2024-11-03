import React from "react";
import { motion, useInView } from "framer-motion";

interface MotionOpacityProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number; // Starting from a slightly higher position
  finalY?: number; // Ending at the final position
}

const MotionOpacity: React.FC<MotionOpacityProps> = ({
  children,
  duration = 1,
  delay = 0,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = -30, // Default to starting 20px above
  finalY = 0, // Default to ending at the original position
}) => {
  return (
    <motion.div
      initial={{ opacity: initialOpacity, y: initialY }}
      whileInView={{ opacity: finalOpacity, y: finalY }}
      transition={{ duration, delay }}
      viewport={{ once: false }} // Ensures the animation runs every time it's in view
    >
      {children}
    </motion.div>
  );
};

export default MotionOpacity;
