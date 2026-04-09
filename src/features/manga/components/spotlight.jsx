import { useEffect, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Info } from 'react-feather';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { spotlightItems } from '../data/mock-manga.js';

const Spotlight = () => {
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
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSpotlight.id}
          initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="grid min-h-[380px] grid-cols-1 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 md:grid-cols-2"
        >
          <div className="flex h-full flex-col items-start gap-4 bg-white/[0.03] p-5 backdrop-blur-sm">
            <span className="mb-8 text-xs font-bold uppercase tracking-[0.32em] text-gray-300">{currentSpotlight.label}</span>
            <h2 className="line-clamp-2 text-4xl font-bold text-white">{currentSpotlight.title}</h2>
            <p className="line-clamp-4 text-sm text-gray-300">{currentSpotlight.description}</p>
            <div className="flex flex-wrap gap-3">
              {currentSpotlight.genres.map((genre) => (
                <span key={genre} className="text-xs text-gray-300">
                  {genre}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <button
                onClick={() => navigate(`/manga/${currentSpotlight.id}`)}
                className="flex items-center rounded-md bg-white px-4 py-2 text-black transition hover:bg-gray-200"
              >
                <BookOpen size={18} className="mr-2" />
                Read Now
              </button>
              <button
                onClick={() => navigate(`/manga/${currentSpotlight.id}/details`)}
                className="flex items-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-white transition hover:border-white"
              >
                <Info size={18} className="mr-2" />
                More Info
              </button>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
            {currentSpotlight.image ? (
              <img src={currentSpotlight.image} alt={currentSpotlight.title} className="h-full w-full object-cover opacity-50 grayscale" />
            ) : (
              <div className="text-8xl font-bold tracking-[0.3em] text-white/15">{currentSpotlight.title.charAt(0)}</div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        <button className="rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:border-white" onClick={prevSpotlight}>
          <ChevronLeft size={24} />
        </button>
        <button className="rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:border-white" onClick={nextSpotlight}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Spotlight;
