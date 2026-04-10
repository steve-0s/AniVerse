import { Send } from 'react-feather';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from '../components/header.jsx';
import { getCommunityPostById } from './community-feed.jsx';
import PageContainer from '../ui/page-container.jsx';
import {useState} from 'react';

const VoteRail = ({ votes, mode = 'shared', userVote = null }) => {
  const isManga = mode === 'manga';
  const isShared = mode === 'shared';
  const shellClass = isShared ? 'bg-gradient-to-b from-zinc-950 to-black' : isManga ? 'bg-black' : 'bg-gray-900/70';
  const textClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-200';
  const hoverClass = isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300';
  const activeClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-300';

  return (
  <div className={`flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 px-3 py-3 text-sm ${shellClass}`}>
    <button
      type="button"
      aria-label="Upvote"
      className={`cursor-pointer transition ${userVote === 'up' ? activeClass : hoverClass}`}
    >
      ▲
    </button>
    <span className={`font-semibold ${textClass}`}>{votes}</span>
    <button
      type="button"
      aria-label="Downvote"
      className={`cursor-pointer transition ${userVote === 'down' ? activeClass : hoverClass}`}
    >
      ▼
    </button>
  </div>
  );
};

const CommunityPostScreen = () => {
  const { postId } = useParams();
  const { pathname } = useLocation();
  const isSharedCommunity = pathname.startsWith('/community');
  const isManga = pathname.startsWith('/manga') && !isSharedCommunity;
  const theme = isSharedCommunity ? 'shared' : isManga ? 'manga' : 'anime';
  const post = getCommunityPostById(theme, postId);
  const backPath = isSharedCommunity ? '/community' : isManga ? '/manga/community' : '/community';
  const [activeReplyId, setActiveReplyId] = useState(null);

  if (!post) {
    return (
      <>
        <Header />
        <PageContainer>
          <section className={`rounded-2xl border border-white/10 p-6 ${isManga ? 'bg-zinc-950/80' : 'bg-black/30'}`}>
            <h2 className="text-3xl font-bold text-white">Thread Not Found</h2>
            <p className="mt-3 text-sm text-gray-400">This discussion does not exist in the current mock feed.</p>
            <Link to={backPath} className={`mt-4 inline-flex text-sm font-semibold ${isManga ? 'text-white' : 'text-red-200'}`}>
              Back to community
            </Link>
          </section>
        </PageContainer>
      </>
    );
  }

  const isShared = theme === 'shared';
  const shellClass = isShared ? 'bg-gradient-to-br from-zinc-950 via-black to-rose-950/20' : isManga ? 'bg-zinc-950/80' : 'bg-black/30';
  const accentTextClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-200';
  const commentShellClass = isShared ? 'bg-gradient-to-br from-black to-zinc-950' : isManga ? 'bg-black' : 'bg-gray-900/70';
  const fieldClass = isShared
    ? 'bg-black/80 focus:border-rose-300'
    : isManga
      ? 'bg-black focus:border-white'
      : 'bg-gray-900 focus:border-red-700';
  const actionButtonClass = isShared
    ? 'bg-rose-300 text-black hover:bg-rose-200'
    : isManga
      ? 'bg-white text-black hover:bg-gray-200'
      : 'bg-red-700 text-white hover:bg-red-600';

  return (
    <>
      <Header />
      <PageContainer>
        <div className="mx-auto max-w-6xl">
          <article className={`rounded-2xl border border-white/10 p-6 ${shellClass}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-semibold ${accentTextClass}`}>{post.community}</span>
                    <span>{post.handle}</span>
                    <span>{post.time}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5">{post.category}</span>
                  </div>
                  <Link
                    to={backPath}
                    className={`inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition ${accentTextClass}`}
                  >
                    Back
                  </Link>
                </div>

                <h1 className="mt-4 max-w-none text-left text-4xl font-bold tracking-normal text-white">{post.title}</h1>

                <p className="mt-5 text-base leading-8 text-gray-200">{post.body}</p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span>Posted by {post.author}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Upvote"
                      className={`cursor-pointer transition ${post.userVote === 'up' ? accentTextClass : isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300'}`}
                    >
                      ▲
                    </button>
                    <span className={`font-semibold ${accentTextClass}`}>{post.votes ?? 0}</span>
                    <button
                      type="button"
                      aria-label="Downvote"
                      className={`cursor-pointer transition ${post.userVote === 'down' ? accentTextClass : isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300'}`}
                    >
                      ▼
                    </button>
                  </div>
                  <span>{post.comments.length} comments</span>
                </div>
              </div>
            </div>

            <section className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder='Join the conversation...'
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

              {post.comments.map((comment) => (
                <article key={comment.id} className={`min-w-0 rounded-2xl border border-white/8 p-4 ${commentShellClass}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className={`font-semibold ${accentTextClass}`}>{comment.author}</span>
                      <span>{comment.time}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-gray-200">{comment.text}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3 text-xs">
                      <button
                        type="button"
                        aria-label="Upvote comment"
                        className={`group relative inline-flex items-center justify-center transition ${comment.userVote === 'up' ? accentTextClass : 'text-gray-400 hover:text-white'}`}
                      >
                        <span>▲</span>
                        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                          Upvote
                        </span>
                      </button>
                      <span className={`font-semibold ${accentTextClass}`}>{comment.votes ?? 0}</span>
                      <button
                        type="button"
                        aria-label="Downvote comment"
                        className={`group relative inline-flex items-center justify-center transition ${comment.userVote === 'down' ? accentTextClass : 'text-gray-400 hover:text-white'}`}
                      >
                        <span>▼</span>
                        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                          Downvote
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveReplyId(activeReplyId === comment.id ? null : comment.id)}
                        className={`inline-flex items-center gap-1 transition ${accentTextClass}`}
                      >
                        Reply
                      </button>
                    </div>
                    {activeReplyId === comment.id && (
                      <div className="mt-3 flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={`Reply to ${comment.author}...`}
                          className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
                        />
                        <button
                          type="button"
                          aria-label="Send reply"
                          className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${actionButtonClass}`}
                        >
                          <Send size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </section>
          </article>
        </div>
      </PageContainer>
    </>
  );
};

export default CommunityPostScreen;
