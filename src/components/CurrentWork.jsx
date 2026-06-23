import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Calendar, Clock, Globe, Briefcase } from 'lucide-react';

export default function CurrentWork() {
  return (
    <motion.section 
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md card-hover"
    >
      <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
        Current Availability
      </h2>
      
      <div className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl p-6 border border-indigo-100 dark:border-indigo-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">Currently accepting new clients</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Clock className="text-indigo-600 dark:text-indigo-400 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Availability</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Up to 20 hours/week <br className="hidden sm:block" />(Full-time open to negotiation)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Globe className="text-indigo-600 dark:text-indigo-400 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Time Zone</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">PST (GMT+8) <br className="hidden sm:block" />Flexible for US/EU clients</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 sm:col-span-2">
            <Calendar className="text-indigo-600 dark:text-indigo-400 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Start Date</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Immediately available</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
