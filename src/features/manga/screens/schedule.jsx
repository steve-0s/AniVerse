import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import LatestChapters from '../components/latest-chapters.jsx';
import ReleaseSchedule from '../components/release-schedule.jsx';
import UpcomingReleases from '../components/upcoming-releases.jsx';

const MangaSchedule = () => {
  return (
    <>
      <Header />
      <PageContainer title="Reading Schedule" subtitle="Track release windows and freshly updated chapters.">
        <ReleaseSchedule />
        <div className="mt-6">
          <UpcomingReleases />
        </div>
        <div className="mt-6">
          <LatestChapters />
        </div>
      </PageContainer>
    </>
  );
};

export default MangaSchedule;
