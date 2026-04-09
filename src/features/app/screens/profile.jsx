import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { animeCatalog } from '../../anime/data/mock-anime.js';
import AnimeCard from '../../anime/components/anime-card.jsx';
import { mangaCatalog } from '../../manga/data/mock-manga.js';
import MangaCard from '../../manga/components/manga-card.jsx';
import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';

const SharedProfile = () => {
  const { pathname } = useLocation();
  const isMangaMode = pathname.startsWith('/manga');

  return (
    <>
      <Header />
      <PageContainer
        title="Profile"
        subtitle="Your anime watchlist and manga library in one place."
      >
        <div className="space-y-6">
          <section
            className={`rounded-xl border border-white/10 p-4 ${
              isMangaMode ? 'bg-zinc-950/80' : 'bg-black/30'
            }`}
          >
            <h3 className={`text-xl font-bold ${isMangaMode ? 'text-white' : 'text-red-700'}`}>
              Continue Watching
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Resume from: Naruto, Season 1 Episode 5 (placeholder)
            </p>
          </section>

          <section
            className={`rounded-xl border border-white/10 p-4 ${
              isMangaMode ? 'bg-zinc-950/80' : 'bg-black/30'
            }`}
          >
            <h3 className={`text-xl font-bold ${isMangaMode ? 'text-white' : 'text-red-700'}`}>
              Continue Reading
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Resume from: Berserk, Volume 2 Chapter 11 (placeholder)
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-red-700">My Watchlist</h3>
              <Link to="/browse" className="text-sm text-gray-300 hover:text-red-300">
                View all anime
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {animeCatalog.slice(0, 4).map((anime) => (
                <div key={anime.id} className="w-full min-w-0">
                  <AnimeCard anime={anime} />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">My Manga Library</h3>
              <Link to="/manga/browse" className="text-sm text-gray-300 hover:text-white">
                View all manga
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {mangaCatalog.slice(0, 4).map((manga) => (
                <div key={manga.id} className="w-full min-w-0">
                  <MangaCard manga={manga} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageContainer>
    </>
  );
};

export default SharedProfile;
