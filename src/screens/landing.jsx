import React from 'react'
import { useNavigate } from 'react-router-dom'
import SakuraFall from '../effects/SakuraFall.jsx'
import SearchBar from '../components/searchbar.jsx'

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main>
      <SakuraFall />
      <div className="pattern" />
      <div className="relative z-10">
        <header className="mb-20">
          <h1> Find <span className="text-gradient">Anime</span> You'll Enjoy without the Hassle</h1>
        </header>

        <SearchBar />

      </div>
      <button
        onClick={() => navigate('/home')}
        className="ml-1.5 absolute bottom-[15vh] left-1/2 -translate-x-1/2 bg-[#ff1133] 
                        hover:bg-[#ff3355] text-white px-8 py-4 rounded-xl font-bold 
                        tracking-widest transition-all 
                        shadow-[0_0_20px_rgba(255,17,51,0.5)] 
                        hover:shadow-[0_0_30px_rgba(255,17,51,0.8)] 
                        hover:-translate-y-1 z-50 w-[15vw] text-xs">
        Continue to Home Page
      </button>
    </main>
  )
}

export default Landing