import Header from '../../../shared/components/header.jsx';
import CommentSection from '../../../shared/components/comments-section.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';

const MangaCommunity = () => {
  return (
    <>
      <Header />
      <PageContainer title="Manga Community" subtitle="Discuss chapters, theories, and panel details.">
        <CommentSection theme="manga" title="Reader Discussion" placeholder="Talk about a chapter, arc, or favorite panel..." />
      </PageContainer>
    </>
  );
};

export default MangaCommunity;
