import { Link } from 'react-router-dom';
import MangaCard from './manga-card.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const TrendingManga = () => {
  const items = mangaCatalog.slice(0, 6);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Trending Manga</h3>
        <Link to="/manga/browse" className="text-sm text-gray-300 transition hover:text-white">
          View all
        </Link>
      </div>

      <div className="no-scrollbar overflow-x-auto">
        <div className="grid w-max grid-flow-col gap-4 pb-2">
          {items.map((manga) => (
            <div key={manga.id} className="w-64">
              <MangaCard manga={manga} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingManga;
