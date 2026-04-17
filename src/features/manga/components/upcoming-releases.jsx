import { Link } from 'react-router-dom';
import MangaCard from './manga-card.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const UpcomingReleases = () => {
  const items = [...mangaCatalog].sort((a, b) => b.year - a.year).slice(0, 4);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#F2A7BC]">Upcoming Releases</h3>
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

export default UpcomingReleases;
