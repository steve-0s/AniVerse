import Header from '../components/common/header.jsx';
import PageContainer from '../components/ui/page-container.jsx';
import AnimeDetails from '../components/sections/anime-details.jsx';
import CommentSection from '../components/sections/comments-section.jsx';

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
