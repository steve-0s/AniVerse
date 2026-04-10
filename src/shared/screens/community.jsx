import Header from '../components/header.jsx';
import CommunityFeed from './community-feed.jsx';
import PageContainer from '../ui/page-container.jsx';

const SharedCommunity = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <CommunityFeed
          theme="shared"
          title="AniVerse Community"
          subtitle="A combined anime and manga discussion board for theories, recommendations, reactions, and hot takes."
        />
      </PageContainer>
    </>
  );
};

export default SharedCommunity;
