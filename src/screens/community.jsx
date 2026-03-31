import Header from '../components/header.jsx';
import PageContainer from '../components/page-container.jsx';
import CommentSection from '../components/comments-section.jsx';

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
