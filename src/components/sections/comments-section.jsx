const CommentSection = () => {
  const sampleComments = [
    { id: 1, user: 'Mika', text: 'Animation quality this season is wild.' },
    { id: 2, user: 'Ren', text: 'Episode 3 cliffhanger ruined my week.' }
  ];

  return (
    <section className="rounded-xl border border-white/10 bg-black/30 p-4">
      <h3 className="mb-3 text-xl font-bold text-red-700">Community Comments</h3>
      <div className="space-y-2">
        {sampleComments.map((comment) => (
          <article key={comment.id} className="rounded-lg bg-gray-900/70 p-3">
            <p className="text-sm font-semibold text-red-300">{comment.user}</p>
            <p className="mt-1 text-sm text-gray-200">{comment.text}</p>
          </article>
        ))}
      </div>
      <textarea
        placeholder="Drop your thoughts about this episode..."
        className="mt-3 min-h-24 w-full rounded-lg border border-white/20 bg-gray-900 p-3 text-sm outline-none focus:border-red-800"
      />
      <button className="mt-2 rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold hover:bg-red-700">
        Post Comment
      </button>
    </section>
  );
};

export default CommentSection;
