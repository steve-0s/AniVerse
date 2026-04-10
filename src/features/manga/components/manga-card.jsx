import { Link } from 'react-router-dom';
import MangaMetaChips from './manga-meta-chips.jsx';

const MangaCard = ({ manga, compact = false }) => {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 transition hover:border-white/40">
      <div className={`relative w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 ${compact ? 'h-36' : 'h-44'}`}>
        {manga.image ? (
          <img src={manga.image} alt={manga.title} className="h-full w-full object-cover opacity-70 grayscale" />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold tracking-[0.3em] text-white/25">
            {manga.title.charAt(0)}
          </div>
        )}
      </div>

      <div className={`space-y-3 ${compact ? 'p-3' : 'p-4'}`}>
        <h3 className={`line-clamp-1 font-bold text-white ${compact ? 'text-sm' : 'text-base'}`}>{manga.title}</h3>
        <MangaMetaChips compact={compact} genres={manga.genres} rating={manga.rating} year={manga.year} status={manga.status} />
        <p className={`line-clamp-2 ${compact ? 'text-xs' : 'text-sm'} text-gray-300`}>{manga.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            to={`/manga/${manga.id}`}
            className={`rounded-md bg-white ${compact ? 'px-2 py-1 text-[0.65rem]' : 'px-3 py-1.5 text-xs'} font-semibold text-black transition hover:bg-gray-200`}
          >
            Read
          </Link>
          <Link
            to={`/manga/${manga.id}/details`}
            className={`rounded-md border border-white/20 ${compact ? 'px-2 py-1 text-[0.65rem]' : 'px-3 py-1.5 text-xs'} font-semibold text-gray-100 transition hover:border-white hover:text-white`}
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MangaCard;
