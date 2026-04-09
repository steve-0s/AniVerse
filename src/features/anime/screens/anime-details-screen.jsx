import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import AnimeDetails from '../components/anime-details.jsx';
import CommentSection from '../../../shared/components/comments-section.jsx';

const AnimeWatchScreen = () => {
  return (
    <>
      <Header />
      <PageContainer title="Anime Details" subtitle="Synopsis, metadata, and community discussion.">
        <AnimeDetails />
        <CommentSection />
      </PageContainer>
    </>
  );
};

export default AnimeWatchScreen;
