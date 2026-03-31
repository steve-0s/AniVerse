import Header from '../components/header.jsx';
import PageContainer from '../components/page-container.jsx';
import RandomSuggestion from '../components/random-sugestion.jsx';
import SectionCarousel from '../components/ui/section-carousel.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const Profile = () => {
  return (
    <>
      <Header />
      <PageContainer title="Profile" subtitle="Your watchlist and recommendations scaffold.">
        <section className="rounded-xl border border-white/10 bg-black/30 p-4">
          <h3 className="text-xl font-bold text-red-700">Continue Watching</h3>
          <p className="mt-2 text-sm text-gray-300">
            Resume from: Naruto, Season 1 Episode 5 (placeholder)
          </p>
        </section>

        <div className="mt-6">
          <SectionCarousel title="My Watchlist" items={animeCatalog.slice(0, 4)} viewAllTo="/browse" />
        </div>

        <div className="mt-6">
          <RandomSuggestion />
        </div>
      </PageContainer>
    </>
  );
};

export default Profile;
