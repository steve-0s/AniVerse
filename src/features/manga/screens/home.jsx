import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import Spotlight from '../components/spotlight.jsx';
import TrendingManga from '../components/trending.jsx';
import TopManga from '../components/top-manga.jsx';
import LatestChapters from '../components/latest-chapters.jsx';

const MangaHome = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
          <Spotlight />
          <TrendingManga />
          <TopManga />
          <LatestChapters />
        </div>
      </PageContainer>
    </>
  );
};

export default MangaHome;
