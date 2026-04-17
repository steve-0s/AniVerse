import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'react-feather';
import { SmallSearchBar } from './searchbar.jsx';

const buildNavItems = (isManga) => [
  { to: isManga ? '/manga/home' : '/home', label: 'Home' },
  { to: isManga ? '/manga/browse' : '/browse', label: 'Browse' },
  { to: isManga ? '/manga/community' : '/community', label: 'Community' },
];

const mapModePath = (pathname, targetMode) => {
  if (targetMode === 'manga') {
    if (pathname === '/home') return '/manga/home';
    if (pathname === '/browse') return '/manga/browse';
    if (pathname === '/search') return '/manga/search';
    if (pathname === '/community') return '/manga/community';
    if (pathname === '/profile') return '/manga/profile';
    if (/^\/anime\/\d+\/details$/.test(pathname)) return pathname.replace('/anime/', '/manga/');
    if (/^\/anime\/\d+$/.test(pathname)) return pathname.replace('/anime/', '/manga/');
    return '/manga/home';
  }

  if (pathname === '/manga/home') return '/home';
  if (pathname === '/manga/browse') return '/browse';
  if (pathname === '/manga/search') return '/search';
  if (pathname === '/manga/community') return '/community';
  if (pathname === '/manga/profile') return '/profile';
  if (/^\/manga\/\d+\/details$/.test(pathname)) return pathname.replace('/manga/', '/anime/');
  if (/^\/manga\/\d+$/.test(pathname)) return pathname.replace('/manga/', '/anime/');
  return '/home';
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const isManga = pathname.startsWith('/manga');
  const navItems = buildNavItems(isManga);
  const animePath = mapModePath(pathname, 'anime');
  const mangaPath = mapModePath(pathname, 'manga');
  const accountName = 'Steve';
  const profileImage = null; // replace with actual user image URL when available
  const profileInitial = accountName?.trim()?.charAt(0).toUpperCase() || 'U';

  return (
    <div
      className={`border-b px-4 shadow-lg backdrop-blur-sm ${
        isManga ? 'border-white/20 bg-black/90' : 'border-white/20 bg-black/50'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-white/10 md:hidden"
            aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <NavLink to="/" className="flex items-center gap-2">
            <img src="/images/AniVerse-logo.png" alt="Logo" className="h-16" />
          </NavLink>
          <div className="flex items-center rounded-full border border-white/15 bg-black/70 p-1">
            <NavLink
              to={animePath}
              className={({ isActive }) =>
                `rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  !isManga || isActive ? 'bg-red-700 text-white' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              A
            </NavLink>
            <NavLink
              to={mangaPath}
              className={({ isActive }) =>
                `rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  isManga || isActive ? 'bg-[#F2A7BC] text-[#221B21]' : 'text-gray-300 hover:text-[#F2A7BC]'
                }`
              }
            >
              M
            </NavLink>
          </div>
          <nav className="hidden md:block ml-3">
            <ul className="flex flex-wrap gap-4 text-xs">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? isManga
                        ? 'text-[#F2A7BC]'
                        : 'text-red-400'
                      : isManga
                        ? 'cursor-pointer text-gray-300 transition-colors hover:text-[#F2A7BC]'
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
          <button
            type="button"
            onClick={() => {
              setMobileSearchOpen((prev) => !prev);
              setMobileNavOpen(false);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-white/10 md:hidden"
            aria-label={mobileSearchOpen ? 'Close search' : 'Open search'}
          >
            <Search className="h-5 w-5" />
          </button>

          <div className="hidden md:block">
            <SmallSearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              placeholder={isManga ? 'Search manga...' : 'Search anime...'}
              theme={isManga ? 'manga' : 'anime'}
            />
          </div>
          <Link
            to={isManga ? '/manga/profile' : '/profile'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/20"
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt={`${accountName} avatar`}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              profileInitial
            )}
          </Link>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-4 py-3">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileNavOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-[#F2A7BC]/20 text-[#F2A7BC]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-[#F2A7BC]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}

      {mobileSearchOpen && (
        <div className="md:hidden border-t border-white/10 px-4 py-3">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={isManga ? 'Search manga...' : 'Search anime...'}
                className="w-full rounded-2xl border border-white/10 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-500"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                autoFocus
              />
            </div>
          </div>
      )}
    </div>
  );
};

export default Header;
