import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { X, ImageIcon } from 'lucide-react';

function GalleryCard({ src, idx, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(`https://picsum.photos/seed/${idx + 42}/640/480`);
  };

  return (
    <div
      className="w-80 md:w-96 h-56 md:h-64 mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-800 group/card"
      onClick={onClick}
    >
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent animate-[shimmer_1.5s_infinite] bg-[length:200%_100%]" />
          <ImageIcon size={32} className="text-slate-300 dark:text-slate-600 relative z-10" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={`Gallery image ${idx + 1}`}
        className={`w-full h-full object-cover transition-all duration-700 group/card-hover:scale-110 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        onLoad={() => setLoaded(true)}
        onError={handleError}
      />
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-indigo-900/0 hover:bg-indigo-900/20 transition-colors duration-300 flex items-center justify-center">
        <span className="opacity-0 hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity duration-300">
          View
        </span>
      </div>
    </div>
  );
}

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
          <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
          Gallery
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
          {marqueeImages.map((src, idx) => (
            <GalleryCard key={idx} src={src} idx={idx} onClick={() => setSelectedImage(src)} />
          ))}
        </div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform absolute top-0 left-0">
          {marqueeImages.map((src, idx) => (
            <GalleryCard key={`dup-${idx}`} src={src} idx={idx} onClick={() => setSelectedImage(src)} />
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
