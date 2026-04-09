import Header from '../../../shared/components/header.jsx';
import SpotLight from '../components/spotlight.jsx';
import Trending from '../components/trending.jsx';
import Top10 from '../components/top-anime-thisSeason.jsx';
import LatestEpisodes from '../components/latest-ep.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
          <SpotLight />
          <Trending />
          <Top10 />
          <LatestEpisodes />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
