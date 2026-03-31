import Header from '../components/common/header.jsx';
import PageContainer from '../components/ui/page-container.jsx';
import CommentSection from '../components/sections/comments-section.jsx';

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
