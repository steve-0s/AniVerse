import Header from '../components/header.jsx';
import PageContainer from '../components/page-container.jsx';
import AnimeDetails from '../components/anime-details.jsx';
import CommentSection from '../components/comments-section.jsx';

const AnimeDetailsScreen = () => {
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

export default AnimeDetailsScreen;
