import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SmallSearchBar } from './searchbar.jsx';

const navItems = [
  { to: '/home', label: 'Home' },
  { to: '/browse', label: 'Anime List' },
  { to: '/community', label: 'Community' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/profile', label: 'Profile' }
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="border-b border-white/20 bg-black/50 px-4 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/images/AniVerse-logo.png" alt="Logo" className="h-16" />
          </NavLink>
          <nav className="ml-3">
            <ul className="flex flex-wrap gap-4 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-red-400'
                      : 'cursor-pointer text-gray-300 transition-colors hover:text-red-400'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>

        <SmallSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Header;
