import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setDismissed(true);
  };

  const shouldShow = visible && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 lg:hidden"
        >
          <button
            onClick={handleContact}
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-semibold rounded-full shadow-xl shadow-violet-600/30 transition-all text-sm"
          >
            <Mail size={16} />
            Hire Me
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
