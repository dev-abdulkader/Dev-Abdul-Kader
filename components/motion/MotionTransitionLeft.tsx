"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionTransitionLeftProps {
  children: ReactNode;
}

const MotionTransitionLeft: React.FC<MotionTransitionLeftProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransitionLeft;
