import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import CommentSection from '../../../shared/components/comments-section.jsx';

const Community = () => {
  return (
    <>
      <Header />
      <PageContainer title="Community" subtitle="Discuss episodes, theories, and recommendations.">
        <CommentSection />
      </PageContainer>
    </>
  );
};

export default Community;
