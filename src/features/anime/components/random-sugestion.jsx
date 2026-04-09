import { Link } from 'react-router-dom';
import AnimeCard from './anime-card.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const RandomSuggestion = () => {
  const items = [...animeCatalog].sort((a, b) => b.year - a.year).slice(0, 6);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-red-700">Random</h3>
        <Link to="/schedule" className="text-sm text-gray-300 hover:text-red-300">
          View all
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((anime) => (
            <div key={anime.id} className="w-full min-w-0">
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomSuggestion;
