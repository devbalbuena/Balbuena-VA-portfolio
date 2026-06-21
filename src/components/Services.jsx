import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Share2, Headphones, Search, Mail, Cpu } from 'lucide-react';
import { fadeInUp } from '../motion/variants';

const services = [
  {
    title: 'Administrative Support',
    icon: ClipboardList,
    items: [
      'Email inbox management & filtering',
      'Calendar scheduling & appointment setting',
      'Data entry & spreadsheet management',
      'Document preparation & formatting',
      'File organization (Google Drive / Dropbox)'
    ]
  },
  {
    title: 'Social Media Management',
    icon: Share2,
    items: [
      'Content scheduling (Buffer, Hootsuite, Meta Planner)',
      'Caption writing & hashtag research',
      'Engagement monitoring & community replies',
      'Analytics reporting',
      'Canva graphics creation'
    ]
  },
  {
    title: 'Customer Support',
    icon: Headphones,
    items: [
      'Email & chat support responses',
      'Ticket management & escalation',
      'CRM data entry & updates (HubSpot, Zoho)',
      'Feedback collection & reporting'
    ]
  },
  {
    title: 'Research & Lead Gen',
    icon: Search,
    items: [
      'Web research & competitor analysis',
      'Lead list building & contact finding',
      'Market research summaries',
      'LinkedIn outreach assistance'
    ]
  },
  {
    title: 'Email Marketing',
    icon: Mail,
    items: [
      'Newsletter drafting & scheduling',
      'List segmentation & management',
      'Campaign setup (Mailchimp, Brevo)',
      'Performance reporting'
    ]
  },
  {
    title: 'Tech-Savvy Tasks',
    icon: Cpu,
    items: [
      'WordPress content updates',
      'Basic Canva / graphic editing',
      'Notion & Trello board setup',
      'Automation setup (Zapier, Make.com)'
    ]
  }
];

export default function Services() {
  return (
    <motion.section 
      id="services"
      variants={fadeInUp}
      className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-8 h-[2px] bg-teal-600 rounded-full" />
        Services Offered
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-900/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
                <Icon className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-teal-500 mt-1">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
