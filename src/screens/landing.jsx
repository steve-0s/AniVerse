import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SakuraFall from "../effects/SakuraFall.jsx";
import SearchBar from "../components/common/searchbar.jsx";

const Landing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLeaving, setIsLeaving] = useState(false);
  const touchStartY = useRef(0);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const goHomeWithTransition = () => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      setIsLeaving(true);
      setTimeout(() => {
        navigate("/home");
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

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  return (
    <main
      className={`relative min-h-screen overflow-hidden px-2 sm:px-6 lg:px-8 bg-gray-900 transition-all duration-300 ${
        isLeaving ? "opacity-0 translate-y-2 scale-[0.99]" : "opacity-100 translate-y-0 scale-100"
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
            Find <span className="text-gradient">Anime</span> You'll Enjoy
            without the Hassle
          </h1>
        </header>

        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl mb-25">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <button
          onClick={() => navigate("/home")}
          className="mt-8 w-full max-w-[280px] rounded-xl bg-[#ff1133] px-6 py-3 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#ff3355] shadow-[0_0_20px_rgba(255,17,51,0.5)] hover:shadow-[0_0_30px_rgba(255,17,51,0.8)] sm:text-base"
        >
          Continue to Home Page
        </button>

        <p className="mt-6 text-sm text-gray-300/90 animate-pulse">Scroll down to continue</p>
      </div>
    </main>
  );
};

export default Landing;
