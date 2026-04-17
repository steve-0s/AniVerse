const EmptyState = ({ title = 'No results yet', message = 'Try a different filter or search term.', theme = 'anime' }) => {
  const isManga = theme === 'manga';

  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-center">
      <h3 className={`text-lg font-bold ${isManga ? 'text-[#F2A7BC]' : 'text-white'}`}>{title}</h3>
      <p className={`mt-2 text-sm ${isManga ? 'text-[#D7C5CD]' : 'text-gray-300'}`}>{message}</p>
    </div>
  );
};

export default EmptyState;
