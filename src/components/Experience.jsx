import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Briefcase, Award, GraduationCap, Calendar } from 'lucide-react';

const timelineData = [
  {
    type: 'work',
    title: 'Executive Virtual Assistant',
    company: 'TechStartups Global',
    date: '2023 - Present',
    description: 'Managing C-level calendars, filtering high-volume inboxes, and coordinating international team meetings.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Social Media Manager',
    company: 'E-Commerce Brands Inc.',
    date: '2021 - 2023',
    description: 'Grew client Instagram accounts by 150% organically and managed daily content scheduling via Buffer and Hootsuite.',
    icon: Briefcase,
  },
  {
    type: 'cert',
    title: 'HubSpot Marketing Software Certified',
    company: 'HubSpot Academy',
    date: '2022',
    description: 'Certified in inbound marketing strategies and HubSpot CRM management.',
    icon: Award,
  },
  {
    type: 'edu',
    title: 'Bachelor of Science in Information Technology',
    company: 'University of Butuan',
    date: '2017 - 2021',
    description: 'Graduated with honors. Developed a strong technical foundation that aids in software adoption and troubleshooting.',
    icon: GraduationCap,
  }
];

export default function Experience() {
  return (
    <motion.section 
      id="experience"
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden card-hover"
    >
      <h2 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-slate-50 flex items-center gap-2">
        <span className="w-8 h-[2px] bg-indigo-500 rounded-full" />
        Experience & Certifications
      </h2>

      <div className="relative border-l border-slate-200 dark:border-slate-700 ml-3 md:ml-4 space-y-8 pb-4">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const isWork = item.type === 'work';
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[20px] top-1 p-2 rounded-full border-4 border-white dark:border-slate-800 transition-colors duration-300 ${isWork ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/80' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'}`}>
                <Icon size={16} />
              </div>

              {/* Content Card */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800/50 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{item.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800 px-2.5 py-1 rounded-md w-fit h-fit">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
