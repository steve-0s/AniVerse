import Header from '../components/header.jsx';
import PageContainer from '../components/ui/page-container.jsx';
import EstimatedSchedule from '../components/estimated-schedule.jsx';
import UpcomingAnime from '../components/upcoming-animes.jsx';
import LatestEpisodes from '../components/latest-ep.jsx';

const Schedule = () => {
  return (
    <>
      <Header />
      <PageContainer title="Schedule" subtitle="Track upcoming drops and latest episodes.">
        <EstimatedSchedule />
        <div className="mt-6">
          <UpcomingAnime />
        </div>
        <div className="mt-6">
          <LatestEpisodes />
        </div>
      </PageContainer>
    </>
  );
};

export default Schedule;
