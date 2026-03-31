import { Link } from 'react-router-dom';
import AnimeCard from '../anime-card.jsx';

const SectionCarousel = ({ title, items = [], viewAllTo }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-red-700">{title}</h3>
        {viewAllTo && (
          <Link to={viewAllTo} className="text-sm text-gray-300 hover:text-red-300">
            View all
          </Link>
        )}
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

export default SectionCarousel;
