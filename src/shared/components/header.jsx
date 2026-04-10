import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SmallSearchBar } from './searchbar.jsx';

const buildNavItems = (isManga) => [
  { to: isManga ? '/manga/home' : '/home', label: 'Home' },
  { to: isManga ? '/manga/browse' : '/browse', label: isManga ? 'Manga List' : 'Anime List' },
  { to: isManga ? '/manga/community' : '/community', label: 'Community' },
  ...(isManga ? [] : [{ to: '/schedule', label: 'Schedule' }]),
  { to: isManga ? '/manga/profile' : '/profile', label: 'Profile' }
];

const mapModePath = (pathname, targetMode) => {
  if (targetMode === 'manga') {
    if (pathname === '/home') return '/manga/home';
    if (pathname === '/browse') return '/manga/browse';
    if (pathname === '/search') return '/manga/search';
    if (pathname === '/schedule') return '/manga/home';
    if (pathname === '/community') return '/manga/community';
    if (pathname === '/profile') return '/manga/profile';
    if (/^\/anime\/\d+\/details$/.test(pathname)) return pathname.replace('/anime/', '/manga/');
    if (/^\/anime\/\d+$/.test(pathname)) return pathname.replace('/anime/', '/manga/');
    return '/manga/home';
  }

  if (pathname === '/manga/home') return '/home';
  if (pathname === '/manga/browse') return '/browse';
  if (pathname === '/manga/search') return '/search';
  if (pathname === '/manga/schedule') return '/schedule';
  if (pathname === '/manga/community') return '/community';
  if (pathname === '/manga/profile') return '/profile';
  if (/^\/manga\/\d+\/details$/.test(pathname)) return pathname.replace('/manga/', '/anime/');
  if (/^\/manga\/\d+$/.test(pathname)) return pathname.replace('/manga/', '/anime/');
  return '/home';
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();
  const isManga = pathname.startsWith('/manga');
  const navItems = buildNavItems(isManga);
  const animePath = mapModePath(pathname, 'anime');
  const mangaPath = mapModePath(pathname, 'manga');
  const accountName = 'Steve';

  return (
    <div
      className={`border-b px-4 shadow-lg backdrop-blur-sm ${
        isManga ? 'border-white/20 bg-black/90' : 'border-white/20 bg-black/50'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex items-center gap-3">
          <NavLink to={isManga ? '/manga/home' : '/home'} className="flex items-center gap-2">
            <img src="/images/AniVerse-logo.png" alt="Logo" className="h-16" />
          </NavLink>
          <div className="flex items-center rounded-full border border-white/15 bg-black/70 p-1">
            <NavLink
              to={animePath}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  !isManga || isActive ? 'bg-red-700 text-white' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              A
            </NavLink>
            <NavLink
              to={mangaPath}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  isManga || isActive ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              M
            </NavLink>
          </div>
          <nav className="ml-3">
            <ul className="flex flex-wrap gap-4 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? isManga
                        ? 'text-white'
                        : 'text-red-400'
                      : isManga
                        ? 'cursor-pointer text-gray-300 transition-colors hover:text-white'
                        : 'cursor-pointer text-gray-300 transition-colors hover:text-red-400'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <SmallSearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder={isManga ? 'Search manga...' : 'Search anime...'}
            theme={isManga ? 'manga' : 'anime'}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
