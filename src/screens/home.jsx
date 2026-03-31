import Header from '../components/common/header.jsx';
import SpotLight from '../components/sections/spotlight.jsx';
import Trending from '../components/sections/trending.jsx';
import Top10 from '../components/sections/top-anime-thisSeason.jsx';
import LatestEpisodes from '../components/sections/latest-ep.jsx';
import PageContainer from '../components/ui/page-container.jsx';

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
