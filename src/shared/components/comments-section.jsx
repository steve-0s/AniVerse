const CommentSection = ({
  theme = 'anime',
  title = 'Community Comments',
  placeholder = 'Drop your thoughts about this episode...'
}) => {
  const sampleComments = [
    { id: 1, user: 'Mika', text: 'Animation quality this season is wild.' },
    { id: 2, user: 'Ren', text: 'Episode 3 cliffhanger ruined my week.' }
  ];
  const isManga = theme === 'manga';

  return (
    <section className={`rounded-xl border border-white/10 p-4 ${isManga ? 'bg-zinc-950/80' : 'bg-black/30'}`}>
      <h3 className={`mb-3 text-xl font-bold ${isManga ? 'text-white' : 'text-red-700'}`}>{title}</h3>
      <div className="space-y-2">
        {sampleComments.map((comment) => (
          <article key={comment.id} className={`rounded-lg p-3 ${isManga ? 'bg-black' : 'bg-gray-900/70'}`}>
            <p className={`text-sm font-semibold ${isManga ? 'text-white' : 'text-red-300'}`}>{comment.user}</p>
            <p className="mt-1 text-sm text-gray-200">{comment.text}</p>
          </article>
        ))}
      </div>
      <textarea
        placeholder={placeholder}
        className={`mt-3 min-h-24 w-full rounded-lg border border-white/20 p-3 text-sm outline-none ${
          isManga ? 'bg-black focus:border-white' : 'bg-gray-900 focus:border-red-800'
        }`}
      />
      <button
        className={`mt-2 rounded-md px-3 py-1.5 text-sm font-semibold transition ${
          isManga ? 'bg-white text-black hover:bg-gray-200' : 'bg-red-800 text-white hover:bg-red-700'
        }`}
      >
        Post Comment
      </button>
    </section>
  );
};

export default CommentSection;
