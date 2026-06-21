import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    '/gallery/gallery-1.jpg',
    '/gallery/gallery-2.jpg',
    '/gallery/gallery-3.jpg',
    '/gallery/gallery-4.jpg',
    '/gallery/gallery-5.jpg'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Create a double array for seamless looping
  const marqueeImages = [...images, ...images];

  return (
    <motion.section 
      id="gallery"
      variants={fadeInUp}
      className="py-8 overflow-hidden"
    >
      <div className="px-8 mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-8 h-[2px] bg-teal-600 rounded-full" />
          Gallery
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
          {marqueeImages.map((src, idx) => (
            <div 
              key={idx} 
              className="w-80 md:w-96 h-56 md:h-64 mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${idx}/400/300`; // Placeholder if missing
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform absolute top-0 left-0">
          {marqueeImages.map((src, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="w-80 md:w-96 h-56 md:h-64 mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${idx}/400/300`; // Placeholder if missing
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Fullscreen gallery view" 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain border border-white/10"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/full/1200/800`;
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}} />
    </motion.section>
  );
}
