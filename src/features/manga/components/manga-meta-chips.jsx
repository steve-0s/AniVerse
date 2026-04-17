import { BookOpen, Star } from 'react-feather';

const MangaMetaChips = ({ genres = [], rating, year, status }) => {
  const getStatusColor = (value) => {
    switch (value?.toLowerCase()) {
      case 'completed':
        return 'border border-blue-500/40 bg-blue-500/10 text-blue-400';
      case 'ongoing':
        return 'border border-green-500/40 bg-green-500/10 text-green-300';
      case 'hiatus':
        return 'border border-yellow-500/40 bg-yellow-500/10 text-yellow-300';
      case 'cancelled':
      case 'canceled':
        return 'border border-red-500/40 bg-red-500/10 text-red-300';
      default:
        return 'bg-gray-800 text-gray-200';
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-[#D7C5CD]">
      {genres.slice(0, 3).map((genre) => (
        <span key={genre} className="rounded-full border border-white/20 px-2 py-1 text-[#F7DCE5]">
          {genre}
        </span>
      ))}

      {rating && (
        <span className="flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-1 text-[#F7DCE5]">
          <Star color="#F2A7BC" fill="#F2A7BC" size={10} />
          {rating}
        </span>
      )}

      {year && (
        <span className="flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-1 text-[#F7DCE5]">
          <BookOpen size={10} />
          {year}
        </span>
      )}

      {status && <span className={`rounded-full px-2 py-1 ${getStatusColor(status)}`}>{status}</span>}
    </div>
  );
};

export default MangaMetaChips;
