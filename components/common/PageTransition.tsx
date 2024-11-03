import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }} // Animate to full height
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }} // Keep it full height during entry
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
};

export default PageTransition;
