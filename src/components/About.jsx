import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';

export default function About() {
  return (
    <motion.section 
      id="about"
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md card-hover"
    >
      <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
        About Me
      </h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] sm:text-base">
        <p>
          I'm a detail-oriented and highly organized Virtual Assistant from Butuan City, Philippines, with a strong background in administrative support, digital communication, and social media management.
        </p>
        <p>
          I help busy entrepreneurs, small businesses, and professionals reclaim their time by handling the repetitive tasks that slow them down — so they can focus on what matters most.
        </p>
        <p>
          I combine my background in IT with a passion for clean systems and efficient workflows, bringing a tech-savvy edge to every task I take on.
        </p>
      </div>
    </motion.section>
  );
}
