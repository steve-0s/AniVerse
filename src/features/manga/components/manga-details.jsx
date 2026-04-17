import { Link, useParams } from 'react-router-dom';
import { mangaCatalog } from '../data/mock-manga.js';
import MangaMetaChips from './manga-meta-chips.jsx';

const MangaDetails = () => {
  const { id } = useParams();
  const manga = mangaCatalog.find((item) => item.id === Number(id)) || mangaCatalog[0];

  return (
    <section className="p-6">
      <div className="grid gap-6 rounded-lg border border-white/10 bg-zinc-950/80 p-6 md:grid-cols-[250px_1fr]">
        <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-black md:h-auto">
          {manga.image ? (
            <img src={manga.image} alt={manga.title} className="h-full w-full object-cover grayscale" />
          ) : (
            <div className="text-8xl font-bold tracking-[0.3em] text-white/20">{manga.title.charAt(0)}</div>
          )}
        </div>

        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-2xl font-bold text-white">{manga.title}</h2>
          <MangaMetaChips genres={manga.genres} rating={manga.rating} year={manga.year} status={manga.status} />
          <p className="text-sm text-gray-300">{manga.description}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Author: {manga.author}</span>
            <span>Chapters: {manga.chapters}</span>
            <span>Volumes: {manga.volumes}</span>
          </div>
          <div className="flex gap-2 pt-2">
            <Link
              to={`/manga/${manga.id}`}
              className="rounded-md bg-[#F2A7BC] px-3 py-1.5 text-xs font-semibold text-[#221B21] transition hover:bg-[#F7DCE5]"
            >
              Go to Reader
            </Link>
            <button className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-gray-200 transition hover:border-[#F2A7BC] hover:text-[#F2A7BC]">
              Add to Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangaDetails;
