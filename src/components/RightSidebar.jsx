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
        className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md"
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
        className="p-6 rounded-2xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)',
          border: '1px solid rgba(129, 140, 248, 0.2)',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}
      >
        {/* Glowing orb inside card */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-16 -mt-16 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full -ml-10 -mb-10 blur-2xl" style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)' }} />

        {/* Subtle top border highlight */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-violet-300 text-lg">✦</span>
            <h3 className="text-xl font-bold text-white">Ready to save time?</h3>
          </div>
          <p className="text-indigo-200/80 text-sm mb-6 leading-relaxed">Let's discuss how I can help streamline your daily operations.</p>
          
          <button 
            onClick={scrollToContact}
            className="w-full py-3 rounded-xl font-bold text-white relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #7c3aed)',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #818cf8, #8b5cf6)' }} />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Hire Me</span>
              <span className="text-violet-200">→</span>
            </span>
          </button>
        </div>
      </motion.div>

      {/* Contact Form Container */}
      <motion.div variants={fadeInUp}>
        <ContactForm />
      </motion.div>
      
    </div>
  );
}
