import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import RandomSuggestion from '../components/random-sugestion.jsx';
import { Link } from 'react-router-dom';
import AnimeCard from '../components/anime-card.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const Profile = () => {
  return (
    <>
      <Header />
      <PageContainer title="Profile" subtitle="Your watchlist and recommendations scaffold.">
        <section className="rounded-xl border border-white/10 bg-black/30 p-4">
          <h3 className="text-xl font-bold text-red-700">Continue Watching</h3>
          <p className="mt-2 text-sm text-gray-300">
            Resume from: Naruto, Season 1 Episode 5 (placeholder)
          </p>
        </section>

        <div className="mt-6">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-red-700">My Watchlist</h3>
              <Link to="/browse" className="text-sm text-gray-300 hover:text-red-300">
                View all
              </Link>
            </div>

            <div className="no-scrollbar overflow-x-auto">
              <div className="grid w-max grid-flow-col gap-4 pb-2">
                {animeCatalog.slice(0, 4).map((anime) => (
                  <div key={anime.id} className="w-64">
                    <AnimeCard anime={anime} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6">
          <RandomSuggestion />
        </div>
      </PageContainer>
    </>
  );
};

export default Profile;
