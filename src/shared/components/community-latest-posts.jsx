import { Link } from 'react-router-dom';
import { buildCommunityPosts } from './community-feed.jsx';

const CommunityLatestPosts = ({
  theme = 'anime',
  title = 'Latest Posts',
  subtitle = 'Fresh discussions from the community.',
  limit = 10
}) => {
  const isManga = theme === 'manga';
  const posts = buildCommunityPosts(theme).slice(0, limit);
  const communityPath = isManga ? '/manga/community' : '/community';
  const threadBasePath = isManga ? '/manga/community' : '/community';

  return (
    <section className={`rounded-2xl border border-white/10 p-5 ${isManga ? 'bg-zinc-950/80' : 'bg-black/30'}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className={`text-2xl font-bold ${isManga ? 'text-white' : 'text-red-700'}`}>{title}</h3>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>
        <Link
          to={communityPath}
          className={`text-sm font-semibold transition ${isManga ? 'text-gray-200 hover:text-white' : 'text-red-200 hover:text-red-300'}`}
        >
          Go to Discussions
        </Link>
      </div>

      <div className="no-scrollbar mt-5 overflow-x-auto">
        <div className="flex w-max gap-3 pb-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className={`w-80 shrink-0 rounded-xl border border-white/8 p-4 ${isManga ? 'bg-black' : 'bg-gray-900/70'}`}
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <span className={`font-semibold ${isManga ? 'text-white' : 'text-red-200'}`}>{post.community}</span>
              <span>{post.handle}</span>
              <span>{post.time}</span>
            </div>

            <Link to={`${threadBasePath}/${post.id}`} className="mt-2 block text-lg font-bold text-white transition hover:opacity-85">
              {post.title}
            </Link>
            <p className="mt-2 line-clamp-2 text-sm text-gray-300">{post.body}</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span>{post.category}</span>
              <span>{post.comments.length} comments</span>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLatestPosts;
