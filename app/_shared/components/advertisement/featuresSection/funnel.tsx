"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bubbles = [
  { id: 1, text: "SEO" },
  { id: 2, text: "SEM/PPC" },
  { id: 3, text: "Blogging" },
  { id: 4, text: "Content Marketing" },
  { id: 5, text: "Advertising" },
];

const FunnelAnimation = () => {
  const [loopKey, setLoopKey] = useState(0);

  // Restart animation when completed
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 6000); // Adjust based on animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-[600px] w-full overflow-hidden bg-white">
      {/* Funnel Layers */}
      <div className="relative w-[400px] h-[500px] flex flex-col items-center">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`absolute border border-gray-400/40 rounded-full w-[${
              400 - i * 50
            }px] h-[100px]`}
            style={{ top: `${i * 100}px` }}
          />
        ))}
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={`${bubble.id}-${loopKey}`}
          className="absolute px-4 py-2 text-white bg-purple-600 rounded-full shadow-lg"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, 150, 250, 350], // Moves downward
            scale: [1, 1.2, 1, 0.8],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
          style={{ left: `${40 + index * 60}px` }}
        >
          {bubble.text}
        </motion.div>
      ))}

      {/* Retracing Bubble */}
      <motion.div
        key={`bubble-arm-${loopKey}`}
        className="absolute bottom-0 w-10 h-10 bg-purple-500 rounded-full"
        initial={{ opacity: 0, y: 350 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [350, 200, 50, -30], // Moves back up
        }}
        transition={{ duration: 5, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
};

export default FunnelAnimation;
