import React, { useState, useEffect } from 'react';
import { Play, Info, ChevronRight, ChevronLeft } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { spotlightItems } from '../../data/mock-anime.js';

const SpotLight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const prevSpotlight = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? spotlightItems.length - 1 : prev - 1));
  };

  const nextSpotlight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === spotlightItems.length - 1 ? 0 : prev + 1));
  };

  const currentSpotlight = spotlightItems[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === spotlightItems.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spotlight relative overflow-hidden rounded-xl border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSpotlight.id}
          initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="grid min-h-[380px] grid-cols-1 gap-0 bg-gray-900 md:grid-cols-2"
        >
          <div className="flex h-full flex-col items-start gap-4 bg-black/50 p-5 backdrop-blur-sm">
            <span className="mb-8 text-2xl font-bold text-red-700">{currentSpotlight.label}</span>

            <h2 className="line-clamp-2 text-4xl font-bold text-white">{currentSpotlight.title}</h2>

            <p className="line-clamp-4 text-sm text-gray-300">{currentSpotlight.description}</p>

            <div className="flex flex-wrap gap-3">
              {currentSpotlight.genres.map((genre) => (
                <span key={genre} className="text-xs text-red-500">
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4">
              <button
                onClick={() => navigate(`/anime/${currentSpotlight.id}`)}
                className="flex items-center rounded-md bg-red-900 px-4 py-2 text-white hover:bg-red-800"
              >
                <Play size={18} className="mr-2" />
                Watch Now
              </button>
              <button
                onClick={() => navigate(`/anime/${currentSpotlight.id}/details`)}
                className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
              >
                <Info size={18} className="mr-2" />
                More Info
              </button>
            </div>
          </div>

          <div className="relative h-full w-full bg-gradient-to-br from-red-950/40 to-gray-900">
            {currentSpotlight.image ? (
              <img
                src={currentSpotlight.image}
                alt={currentSpotlight.title}
                className="h-full w-full object-cover opacity-70"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-7xl font-bold text-white/20">
                {currentSpotlight.title.charAt(0)}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        <button className="rounded-full bg-gray-700 p-2 text-white hover:bg-red-600" onClick={prevSpotlight}>
          <ChevronLeft size={24} />
        </button>
        <button className="rounded-full bg-gray-700 p-2 text-white hover:bg-red-600" onClick={nextSpotlight}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpotLight;
