import { useState } from 'react';
import { Send } from 'react-feather';

const CommentSection = ({
  theme = 'anime',
  title = 'Comments',
  placeholder = 'Drop your thoughts about this episode...'
}) => {
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [replyDrafts, setReplyDrafts] = useState({});
  const sampleComments = [
    {
      id: 1,
      user: 'Mika',
      time: '12m ago',
      text: 'Animation quality this season is wild. The new fight choreography feels way more confident than the first arc.',
      votes: 24,
      userVote: 'up'
    },
    {
      id: 2,
      user: 'Ren',
      time: '34m ago',
      text: 'Episode 3 cliffhanger ruined my week. I need the next release immediately.',
      votes: 11,
      userVote: null
    }
  ];
  const isManga = theme === 'manga';
  const shellClass = isManga ? 'bg-zinc-950/80' : 'bg-black/30';
  const commentShellClass = isManga ? 'bg-black' : 'bg-gray-900/70';
  const accentTextClass = isManga ? 'text-[#F7ECE6]' : 'text-red-200';
  const activeVoteClass = isManga ? 'text-[#F2A7BC]' : 'text-red-300';
  const hoverVoteClass = isManga ? 'text-[#B89DA7] hover:text-[#F7ECE6]' : 'text-gray-400 hover:text-red-300';
  const fieldClass = isManga ? 'bg-black focus:border-[#F2A7BC]' : 'bg-gray-900 focus:border-red-700';
  const actionButtonClass = isManga
    ? 'bg-[#F2A7BC] text-[#221B21] hover:bg-[#EE9BB3]'
    : 'bg-red-700 text-white hover:bg-red-600';
  const handleReplyChange = (commentId, value) => {
    setReplyDrafts((current) => ({
      ...current,
      [commentId]: value
    }));
  };

  const handleReplySend = (commentId) => {
    const replyText = (replyDrafts[commentId] ?? '').trim();

    if (!replyText) {
      return;
    }

    setReplyDrafts((current) => ({
      ...current,
      [commentId]: ''
    }));
    setActiveReplyId(null);
  };

  return (
    <section className={`rounded-2xl border border-white/10 p-5 ${shellClass}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-2xl font-bold ${accentTextClass}`}>{title}</h3>
          <span className={`text-xs uppercase tracking-[0.18em] ${isManga ? 'text-gray-500' : 'text-gray-500'}`}>
            {sampleComments.length} comments
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <h4 className={`text-lg font-bold ${accentTextClass}`}>Add Comment</h4>
          <div className="mt-3 flex items-center gap-2">
            <input
              type="text"
              placeholder={placeholder}
              className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
            />
            <button
              type="button"
              aria-label="Send comment"
              className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${actionButtonClass}`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {sampleComments.map((comment) => (
            <article
              key={comment.id}
              className={`rounded-2xl border border-white/8 p-4 ${commentShellClass}`}
            >
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className={`font-semibold ${accentTextClass}`}>{comment.user}</span>
                <span>{comment.time}</span>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-200">{comment.text}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3 text-xs">
                <button
                  type="button"
                  aria-label="Upvote comment"
                  className={`group relative inline-flex items-center justify-center transition ${
                    comment.userVote === 'up' ? activeVoteClass : hoverVoteClass
                  }`}
                >
                  <span>▲</span>
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                    Upvote
                  </span>
                </button>

                <span className={`font-semibold ${accentTextClass}`}>{comment.votes}</span>

                <button
                  type="button"
                  aria-label="Downvote comment"
                  className={`group relative inline-flex items-center justify-center transition ${
                    comment.userVote === 'down' ? activeVoteClass : hoverVoteClass
                  }`}
                >
                  <span>▼</span>
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                    Downvote
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveReplyId((current) => (current === comment.id ? null : comment.id))}
                  className={`inline-flex items-center gap-1 transition ${accentTextClass}`}
                >
                  Reply
                </button>
              </div>

              {activeReplyId === comment.id && (
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    value={replyDrafts[comment.id] ?? ''}
                    onChange={(event) => handleReplyChange(comment.id, event.target.value)}
                    placeholder={`Reply to ${comment.user}...`}
                    className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
                  />
                  <button
                    type="button"
                    aria-label="Send reply"
                    onClick={() => handleReplySend(comment.id)}
                    className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${actionButtonClass}`}
                  >
                    <Send size={16} />
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
