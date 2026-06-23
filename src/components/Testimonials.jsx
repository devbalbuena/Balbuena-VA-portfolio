import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Dexter completely transformed how our inbox works. He's responsive, thorough, and I never have to follow up twice. Highly recommend!",
    author: "Sarah K.",
    role: "Online Coach"
  },
  {
    quote: "We hired Dexter for social media management and the results were immediate. Our engagement doubled in the first month!",
    author: "Marcus L.",
    role: "E-Commerce Store Owner"
  },
  {
    quote: "Professional, punctual, and proactive. Dexter handles our calendar and emails like a pro. It's like having a full-time executive assistant remotely.",
    author: "Priya M.",
    role: "Startup Founder"
  }
];

export default function Testimonials() {
  return (
    <motion.section 
      id="testimonials"
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md card-hover"
    >
      <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
        Client Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between h-full p-8 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 text-indigo-100 dark:text-indigo-900/40 w-12 h-12 rotate-12" />
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 relative z-10 italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
