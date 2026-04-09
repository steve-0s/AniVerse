const VolumeTabs = ({ volumes = [], selectedVolume, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {volumes.map((volume) => (
        <button
          key={volume}
          onClick={() => onSelect(volume)}
          className={`rounded-lg border px-3 py-2 text-sm transition ${
            selectedVolume === volume
              ? 'border-white bg-white text-black'
              : 'border-white/20 bg-zinc-900 text-gray-300 hover:border-white/70 hover:text-white'
          }`}
        >
          Volume {volume}
        </button>
      ))}
    </div>
  );
};

export default VolumeTabs;
