import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function RightSidebar() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Obfuscate the email address
    const part1 = "balbuenadexter2";
    const part2 = "gmail.com";
    setEmail(`${part1}@${part2}`);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-8 space-y-6">
      
      {/* Contact Info Card */}
      <motion.div 
        variants={fadeInUp}
        className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md"
      >
        <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact Info</h3>
        <div className="space-y-4">
          <a href="tel:+639912131795" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
              <Phone size={18} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Phone</p>
              <p className="text-sm font-medium">+63 991 213 1795</p>
            </div>
          </a>
          
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
              <Mail size={18} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium">{email || 'Loading...'}</p>
            </div>
          </a>
          
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 group">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
              <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Location</p>
              <p className="text-sm font-medium">Butuan City, Philippines</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick CTA Card */}
      <motion.div 
        variants={fadeInUp}
        className="p-6 rounded-2xl bg-slate-800 border border-slate-700 text-slate-50 shadow-md relative overflow-hidden"
      >
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 dark:bg-sky-400/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full -ml-8 -mb-8 blur-xl"></div>
        
        <h3 className="text-xl font-bold mb-2 relative z-10">Ready to save time?</h3>
        <p className="text-slate-300 text-sm mb-6 relative z-10">Let's discuss how I can help streamline your daily operations.</p>
        
        <button 
          onClick={scrollToContact}
          className="w-full py-3 bg-slate-900 dark:bg-slate-900 text-sky-400 dark:text-sky-400 border border-transparent dark:border-sky-500/30 hover:bg-slate-800 dark:hover:bg-slate-950 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-sm relative z-10"
        >
          Hire Me
        </button>
      </motion.div>

      {/* Contact Form Container */}
      <motion.div variants={fadeInUp}>
        <ContactForm />
      </motion.div>
      
    </div>
  );
}
