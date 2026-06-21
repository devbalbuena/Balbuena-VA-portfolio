import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  "Virtual Assistant",
  "Admin Support Specialist",
  "Social Media Manager",
  "Email & Calendar Expert",
  "Your Reliable Online Partner"
];

export default function TypewriterSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 mt-1 overflow-hidden relative flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base absolute"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
