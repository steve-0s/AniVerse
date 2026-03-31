const EpisodeList = ({ episodes = [], selectedEpisode, onSelect }) => {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
      {episodes.map((episode) => (
        <button
          key={episode.id}
          onClick={() => onSelect(episode.id)}
          className={`rounded-md border px-2 py-2 text-sm transition ${
            selectedEpisode === episode.id
              ? 'border-red-700 bg-red-900/40 text-red-200'
              : 'border-white/20 bg-gray-800/50 text-gray-300 hover:border-red-800'
          }`}
          title={episode.title}
        >
          {episode.id}
        </button>
      ))}
    </div>
  );
};

export default EpisodeList;
