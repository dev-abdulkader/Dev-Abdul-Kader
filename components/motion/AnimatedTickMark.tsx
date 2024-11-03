// components/AnimatedTickMark.tsx
import { motion } from "framer-motion";

const AnimatedTickMark = () => {
  // Variants for the tick mark path animation
  const tickVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* SVG Container */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle background */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#4CAF50"
          strokeWidth="5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Tick mark path */}
        <motion.path
          d="M 30 50 L 45 65 L 70 35"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={tickVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedTickMark;
