const ChapterList = ({ chapters = [], selectedChapter, onSelect }) => {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
      {chapters.map((chapter) => (
        <button
          key={chapter.id}
          onClick={() => onSelect(chapter.id)}
          className={`rounded-md border px-2 py-2 text-sm transition ${
            selectedChapter === chapter.id
              ? 'border-white bg-white text-black'
              : 'border-white/20 bg-zinc-900 text-gray-300 hover:border-white/70 hover:text-white'
          }`}
          title={chapter.title}
        >
          {chapter.id}
        </button>
      ))}
    </div>
  );
};

export default ChapterList;
