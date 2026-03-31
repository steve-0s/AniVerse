import { useParams, Link } from 'react-router-dom';
import { animeCatalog } from '../../data/mock-anime.js';
import AnimeMetaChips from '../common/anime-meta-chips.jsx';

const AnimeDetails = () => {
  const { id } = useParams();
  const anime = animeCatalog.find((item) => item.id === Number(id)) || animeCatalog[0];

  return (
    <section className="p-6">
      <div className="anime-details grid gap-6 rounded-lg border border-white/10 bg-black/30 p-6 md:grid-cols-[250px_1fr]">
        <div className="h-80 w-full overflow-hidden rounded-lg bg-gray-800 md:h-auto">
          {anime.image ? (
            <img src={anime.image} alt={anime.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-8xl font-bold text-white/20">
              {anime.title.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{anime.title}</h2>
          <AnimeMetaChips genres={anime.genres} rating={anime.rating} year={anime.year} status={anime.status} />
          <p className="text-sm text-gray-300">{anime.description}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Studio: {anime.studio}</span>
            <span>Episodes: {anime.episodes}</span>
          </div>
          <div className="flex gap-2 pt-2">
            <Link
              to={`/anime/${anime.id}`}
              className="rounded-md bg-red-800 px-3 py-1.5 text-xs font-semibold hover:bg-red-700"
            >
              Go to Player
            </Link>
            <button className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-gray-200">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetails;
