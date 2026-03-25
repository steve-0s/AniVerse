import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import SearchBar, {SmallSearchBar} from './searchbar.jsx';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div className='shadow-lg px-4 flex flex-items-center bg-black/50 backdrop-blur-sm border-b border-white/20'>
            <div className="flex flex-start items-center gap-2">  
                <NavLink to="/" className="flex items-center gap-2">
                    <img src="/public/images/AniVerse-logo.png" alt="Logo" className="h-20" />
                </NavLink>
                <nav className="ml-6">
                    <ul className="flex gap-6 text-sm">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-300 hover:text-red-900 transition-colors cursor-pointer"}>
                            Home
                        </NavLink>

                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-300 hover:text-red-900 transition-colors cursor-pointer"}>
                            Anime List
                        </NavLink>

                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-300 hover:text-red-900 transition-colors cursor-pointer"}>
                            Genres
                        </NavLink>
                    </ul>
                </nav>
                <div className="ml-5">
                    <SmallSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>
        </div>
    )
}

export default Header