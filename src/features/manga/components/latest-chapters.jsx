import { Link } from 'react-router-dom';
import MangaCard from './manga-card.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const LatestChapters = () => {
  const items = [...mangaCatalog].sort((a, b) => b.chapters - a.chapters).slice(0, 6);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#F2A7BC]">Latest Chapters</h3>
      </div>

      <div className="no-scrollbar">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

export default LatestChapters;
