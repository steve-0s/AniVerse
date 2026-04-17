import { Link } from 'react-router-dom';
import { buildCommunityPosts } from '../screens/community-feed';

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
    <section className={`rounded-2xl border p-5 ${isManga ? 'border-white/10 bg-zinc-950/80' : 'border-white/10 bg-black/30'}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className={`text-2xl font-bold ${isManga ? 'text-[#F2A7BC]' : 'text-red-700'}`}>{title}</h3>
          <p className={`mt-1 text-sm ${isManga ? 'text-[#D7C5CD]' : 'text-gray-400'}`}>{subtitle}</p>
        </div>
        <Link
          to={communityPath}
          className={`text-sm font-semibold transition ${isManga ? 'text-[#D7C5CD] hover:text-[#F2A7BC]' : 'text-red-200 hover:text-red-300'}`}
        >
          Go to Discussions
        </Link>
      </div>

      <div className="no-scrollbar mt-5 overflow-x-auto">
        <div className="flex w-max gap-3 pb-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className={`w-80 shrink-0 rounded-xl border p-4 ${isManga ? 'border-white/8 bg-black' : 'border-white/8 bg-gray-900/70'}`}
          >
            <div className={`flex flex-wrap items-center gap-2 text-xs ${isManga ? 'text-[#D7C5CD]' : 'text-gray-400'}`}>
              <span className={`font-semibold ${isManga ? 'text-[#F2A7BC]' : 'text-red-200'}`}>{post.community}</span>
              <span>{post.handle}</span>
              <span>{post.time}</span>
            </div>

            <Link
              to={`${threadBasePath}/${post.id}`}
              className={`mt-2 block text-lg font-bold transition ${isManga ? 'text-white hover:text-[#F2A7BC]' : 'text-white hover:opacity-85'}`}
            >
              {post.title}
            </Link>
            <p className={`mt-2 line-clamp-2 text-sm ${isManga ? 'text-[#D7C5CD]' : 'text-gray-300'}`}>{post.body}</p>

            <div className={`mt-3 flex flex-wrap items-center gap-3 text-xs ${isManga ? 'text-[#D7C5CD]' : 'text-gray-400'}`}>
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
