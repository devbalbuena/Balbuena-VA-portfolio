import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import { Moon, Sun, Copy, Download, Search, Navigation } from 'lucide-react';

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { addToast } = useToast();

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const copyEmail = () => {
    const email = `balbuenadexter2@gmail.com`;
    navigator.clipboard.writeText(email);
    addToast('Email address copied to clipboard!', 'success');
    setOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Dexter_Balbuena_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-slate-900/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <Command 
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-slate-100 dark:border-slate-800 px-4 py-3">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <Command.Input 
            className="flex-1 outline-none bg-transparent text-slate-900 dark:text-white placeholder-slate-400" 
            placeholder="Type a command or search..." 
            autoFocus
          />
          <kbd className="hidden sm:inline-flex px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="p-4 text-center text-sm text-slate-500">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Command.Item onSelect={() => scrollTo('services')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> Services
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('about')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> About Me
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('skills')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> Skills
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('experience')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> Experience
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('testimonials')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> Testimonials
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('contact')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Navigation size={16} /> Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="px-2 py-2 mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Command.Item onSelect={toggleTheme} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              {isDark ? <Sun size={16} /> : <Moon size={16} />} 
              Toggle {isDark ? 'Light' : 'Dark'} Mode
            </Command.Item>
            <Command.Item onSelect={copyEmail} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Copy size={16} /> Copy Email Address
            </Command.Item>
            <Command.Item onSelect={downloadResume} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700 aria-selected:text-indigo-600 dark:aria-selected:text-indigo-400 transition-colors">
              <Download size={16} /> Download Resume
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
