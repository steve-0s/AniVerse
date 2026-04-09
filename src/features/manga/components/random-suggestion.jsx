import { mangaCatalog } from '../data/mock-manga.js';
import MangaCard from './manga-card.jsx';

const RandomSuggestion = () => {
  const randomManga = mangaCatalog[(new Date().getDate() - 1) % mangaCatalog.length];

  return (
    <section className="space-y-3 rounded-xl border border-white/10 bg-zinc-950/80 p-4">
      <h3 className="text-xl font-bold text-white">Random Pick</h3>
      <MangaCard manga={randomManga} />
    </section>
  );
};

export default RandomSuggestion;
