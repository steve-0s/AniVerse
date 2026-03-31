import { animeCatalog } from '../data/mock-anime.js';
import AnimeCard from './anime-card.jsx';

const RandomSuggestion = () => {
  const randomAnime = animeCatalog[(new Date().getDate() - 1) % animeCatalog.length];

  return (
    <section className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-4">
      <h3 className="text-xl font-bold text-red-700">Random Suggestion</h3>
      <AnimeCard anime={randomAnime} />
    </section>
  );
};

export default RandomSuggestion;
