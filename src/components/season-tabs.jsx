const SeasonTabs = ({ seasons = [], selectedSeason, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {seasons.map((season) => (
        <button
          key={season}
          onClick={() => onSelect(season)}
          className={`rounded-lg border px-3 py-2 text-sm transition ${
            selectedSeason === season
              ? 'border-red-700 bg-red-900/40 text-red-200'
              : 'border-white/20 text-gray-300 hover:border-red-800'
          }`}
        >
          Season {season}
        </button>
      ))}
    </div>
  );
};

export default SeasonTabs;
