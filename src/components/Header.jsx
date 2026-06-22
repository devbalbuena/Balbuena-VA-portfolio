import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import TypewriterSubtitle from './TypewriterSubtitle';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';

export default function Header() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Obfuscate the email address
    const part1 = "balbuenadexter2";
    const part2 = "gmail.com";
    setEmail(`${part1}@${part2}`);
  }, []);

  return (
    <motion.header 
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900 -z-10" />
      
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-xl group-hover:bg-indigo-600/30 transition-colors" />
          <img 
            src="/profile.jpg" 
            alt="Dexter Balbuena" 
            className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md relative z-10 ring-2 ring-indigo-600/50"
            onError={(e) => {
              e.target.src = "https://ui-avatars.com/api/?name=Dexter+Balbuena&background=0d9488&color=fff&size=256";
            }}
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white m-0">Dexter Balbuena</h1>
              <TypewriterSubtitle />
            </div>
          </div>
          
          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm gap-1">
            <MapPin size={16} />
            <span>Butuan City, Philippines</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="https://github.com/devbalbuena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-900/30 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a 
              href="https://linkedin.com/in/devbalbuena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-900/30 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a 
              href={`mailto:${email}`}
              className="p-2.5 rounded-full bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-900/30 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            
            <div className="ml-auto flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800/50 shadow-sm whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                Available for Work
              </span>
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
