import CommunityLatestPosts from '../../../shared/components/community-latest-posts.jsx';

const CommunityLatestComments = () => {
  return <CommunityLatestPosts theme="anime" title="Latest Posts" subtitle="Recent anime discussions from the community." limit={5} />;
};

export default CommunityLatestComments;
