const VolumeTabs = ({ volumes = [], selectedVolume, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {volumes.map((volume) => (
        <button
          key={volume}
          onClick={() => onSelect(volume)}
          className={`rounded-lg border px-3 py-2 text-sm transition ${
            selectedVolume === volume
              ? 'border-[#F2A7BC] bg-[#F2A7BC] text-[#221B21]'
              : 'border-white/20 bg-zinc-900 text-gray-300 hover:border-[#F2A7BC] hover:text-[#F2A7BC]'
          }`}
        >
          Volume {volume}
        </button>
      ))}
    </div>
  );
};

export default VolumeTabs;
