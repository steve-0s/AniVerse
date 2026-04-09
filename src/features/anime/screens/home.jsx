import Header from '../../../shared/components/header.jsx';
import SpotLight from '../components/spotlight.jsx';
import Trending from '../components/trending.jsx';
import Top10 from '../components/top-anime-thisSeason.jsx';
import LatestEpisodes from '../components/latest-ep.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import RandomSuggestions from '../components/random-sugestion.jsx';
import CommunityLatestPosts from '../../../shared/components/community-latest-posts.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
          <SpotLight />
          <Trending />
          <Top10 />
          <CommunityLatestPosts
            theme="anime"
            title="Latest Posts"
            subtitle="Recent anime discussions from the community."
            limit={10}
          />
          <LatestEpisodes />
          <RandomSuggestions />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
