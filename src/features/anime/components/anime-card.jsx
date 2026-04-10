import { Link } from 'react-router-dom';
import AnimeMetaChips from './anime-meta-chips.jsx';

const AnimeCard = ({ anime, compact = false }) => {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-red-900/70">
      <div className={`relative w-full bg-gradient-to-br from-gray-800 to-gray-900 ${compact ? 'h-36' : 'h-44'}`}>
        {anime.image ? (
          <img src={anime.image} alt={anime.title} className="h-full w-full object-cover opacity-80" />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold text-white/30">
            {anime.title.charAt(0)}
          </div>
        )}
      </div>

      <div className={`space-y-3 ${compact ? 'p-3' : 'p-4'}`}>
        <h3 className={`line-clamp-1 font-bold text-white ${compact ? 'text-sm' : 'text-base'}`}>{anime.title}</h3>
        <AnimeMetaChips
          compact={compact}
          genres={anime.genres}
          rating={anime.rating}
          year={anime.year}
          status={anime.status}
        />
        <p className={`line-clamp-2 ${compact ? 'text-xs' : 'text-sm'} text-gray-300`}>{anime.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            to={`/anime/${anime.id}`}
            className={`rounded-md bg-red-800 ${compact ? 'px-2 py-1 text-[0.65rem]' : 'px-3 py-1.5 text-xs'} font-semibold text-white hover:bg-red-700`}
          >
            Watch
          </Link>
          <Link
            to={`/anime/${anime.id}/details`}
            className={`rounded-md border border-white/20 ${compact ? 'px-2 py-1 text-[0.65rem]' : 'px-3 py-1.5 text-xs'} font-semibold text-gray-200 hover:border-red-800 hover:text-red-300`}
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AnimeCard;
