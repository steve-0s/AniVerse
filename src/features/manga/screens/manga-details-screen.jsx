import Header from '../../../shared/components/header.jsx';
import CommentSection from '../../../shared/components/comments-section.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import MangaDetails from '../components/manga-details.jsx';

const MangaDetailsScreen = () => {
  return (
    <>
      <Header />
      <PageContainer title="Manga Details" subtitle="Synopsis, metadata, and reader discussion.">
        <MangaDetails />
        <CommentSection theme="manga" title="Reader Discussion" placeholder="Talk about this manga..." />
      </PageContainer>
    </>
  );
};

export default MangaDetailsScreen;
