import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageSection } from './motion/variants';

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import CurrentWork from './components/CurrentWork';
import Gallery from './components/Gallery';
import RightSidebar from './components/RightSidebar';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollProgressBar from './components/ScrollProgressBar';
import CommandMenu from './components/CommandMenu';
import MobileCTA from './components/MobileCTA';

import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors font-sans selection:bg-teal-200 dark:selection:bg-teal-900 selection:text-teal-900 dark:selection:text-teal-50 pb-16">
      {/* Animated mesh gradient background */}
      <div className="bg-mesh" />

      <ScrollProgressBar />
      <DarkModeToggle />
      <CommandMenu />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <motion.div 
          variants={pageSection} 
          initial="hidden" 
          animate="visible"
          className="flex flex-col lg:flex-row gap-8 items-stretch"
        >
          {/* Main Content Area (Left on Desktop) */}
          <div className="w-full lg:w-[65%] space-y-8">
            <Header />
            <About />
            <CurrentWork />
            <Services />
            <Skills />
            <Gallery />
            <Testimonials />
          </div>
          
          {/* Right Sidebar */}
          <div className="w-full lg:w-[35%]">
            <RightSidebar />
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 mt-20 py-8 text-center text-sm text-slate-600 dark:text-slate-300">
        <p>© {new Date().getFullYear()} Dexter Balbuena. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-1">
          Press <kbd className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded mx-1 text-xs font-mono text-slate-800 dark:text-slate-200">Ctrl+K</kbd> to open command menu.
        </p>
      </footer>

      {/* Mobile sticky CTA */}
      <MobileCTA />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <PortfolioApp />
      </ToastProvider>
    </ThemeProvider>
  );
}
