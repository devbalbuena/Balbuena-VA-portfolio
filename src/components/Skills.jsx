import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';

const skillCategories = [
  {
    title: 'Communication & Admin Tools',
    skills: ['Gmail', 'Google Workspace', 'Microsoft Office', 'Slack', 'Zoom', 'Trello', 'Asana', 'Notion']
  },
  {
    title: 'Social Media Platforms',
    skills: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter/X', 'TikTok', 'Buffer', 'Hootsuite']
  },
  {
    title: 'Design & Content',
    skills: ['Canva', 'Adobe Express', 'Google Slides', 'Loom']
  },
  {
    title: 'CRM & Marketing',
    skills: ['HubSpot', 'Mailchimp', 'Brevo', 'Zoho CRM', 'Airtable']
  },
  {
    title: 'Tech Skills',
    skills: ['WordPress', 'Zapier', 'Make.com', 'Basic HTML', 'Google Analytics']
  }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/10 shadow-sm backdrop-blur-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-8 h-[2px] bg-teal-600 rounded-full" />
        Tools & Skills
      </h2>
      
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
