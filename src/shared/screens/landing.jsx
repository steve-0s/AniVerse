import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SakuraFall from '../../features/app/effects/SakuraFall.jsx';
import SearchBar from '../components/searchbar.jsx';

const Landing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLeaving, setIsLeaving] = useState(false);
  const touchStartY = useRef(0);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const goHomeWithTransition = () => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      setIsLeaving(true);
      setTimeout(() => {
        navigate('/home');
      }, 380);
    };

    const handleWheel = (event) => {
      if (event.deltaY > 20) {
        goHomeWithTransition();
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.changedTouches[0]?.clientY ?? 0;
    };

    const handleTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0]?.clientY ?? 0;
      const delta = touchStartY.current - touchEndY;
      if (delta > 35) {
        goHomeWithTransition();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate]);

  return (
    <main
      className={`relative min-h-screen overflow-hidden px-2 sm:px-6 lg:px-8 bg-gray-900 transition-all duration-300 ${
        isLeaving ? 'opacity-0 translate-y-2 scale-[0.99]' : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      <SakuraFall />
      <div className="pattern" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start text-center">
        <header className="mb-3 flex flex-col items-center">
          <img
            src="/images/AniVerse-logo.png"
            alt="Logo"
            className="h-28 w-auto sm:h-36 md:h-44 lg:h-52"
          />

          <h1 className="mt-4 max-w-[90%] text-3xl font-bold leading-tight text-white sm:max-w-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Discover <span className="text-gradient">Anime and Manga</span> You'll Enjoy
            without the Hassle
          </h1>
        </header>

        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl mb-25">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <p className="mt-6 text-sm text-gray-300/90 animate-pulse">Scroll down to continue</p>
      </div>
    </main>
  );
};

export default Landing;
