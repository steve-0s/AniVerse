import { BookOpen, Star } from 'react-feather';

const MangaMetaChips = ({ genres = [], rating, year, status }) => {
  const getStatusColor = (value) => {
    switch (value?.toLowerCase()) {
      case 'completed':
        return 'border border-white/30 bg-white/10 text-white';
      case 'ongoing':
        return 'border border-[#F2A7BC]/35 bg-[#F2A7BC]/12 text-[#F7DCE5]';
      case 'hiatus':
        return 'border border-zinc-400/50 bg-zinc-500/10 text-zinc-200';
      default:
        return 'bg-zinc-800 text-zinc-100';
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
      {genres.slice(0, 3).map((genre) => (
        <span key={genre} className="rounded-full border border-white/20 px-2 py-1 text-gray-100">
          {genre}
        </span>
      ))}

      {rating && (
        <span className="flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-1 text-white">
          <Star color="#F2A7BC" fill="#F2A7BC" size={10} />
          {rating}
        </span>
      )}

      {year && (
        <span className="flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-1 text-white">
          <BookOpen size={10} />
          {year}
        </span>
      )}

      {status && <span className={`rounded-full px-2 py-1 ${getStatusColor(status)}`}>{status}</span>}
    </div>
  );
};

export default MangaMetaChips;
