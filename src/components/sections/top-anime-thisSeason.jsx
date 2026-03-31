import { Link } from 'react-router-dom';
import AnimeCard from '../common/anime-card.jsx';
import { animeCatalog } from '../../data/mock-anime.js';

const Top10ThisSeason = () => {
  const items = [...animeCatalog].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-red-700">Top 10 This Season</h3>
        <Link to="/browse" className="text-sm text-gray-300 hover:text-red-300">
          View all
        </Link>
      </div>

      <div className="no-scrollbar overflow-x-auto">
        <div className="grid w-max grid-flow-col gap-4 pb-2">
          {items.map((anime) => (
            <div key={anime.id} className="w-64">
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Top10ThisSeason;
