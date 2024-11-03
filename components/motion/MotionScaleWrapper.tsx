"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionScaleWrapperProps {
  children: ReactNode;
  className?: string;
}

const MotionScaleWrapper: React.FC<MotionScaleWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }} // Initial scale
      whileInView={{ scale: 1 }} // Scale to 1 when in view
      transition={{ duration: 0.5 }} // Duration of the animation
      viewport={{ once: true }} // Allows the animation to trigger every time it comes into view
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionScaleWrapper;
