import { Link } from 'react-router-dom';
import Header from '../../../shared/components/header.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import MangaCard from '../components/manga-card.jsx';
import RandomSuggestion from '../components/random-suggestion.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const MangaProfile = () => {
  return (
    <>
      <Header />
      <PageContainer
        title="Reading Profile"
        subtitle="Your saved list, progress, and quiet late-night recommendations."
        theme="manga"
      >
        <section className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
          <h3 className="text-xl font-bold text-[#F2A7BC]">Continue Reading</h3>
          <p className="mt-2 text-sm text-gray-300">Resume from: Berserk, Volume 2 Chapter 11 (placeholder)</p>
        </section>

        <div className="mt-6">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#F2A7BC]">My Library</h3>
              <Link to="/manga/browse" className="text-sm text-[#D7C5CD] transition hover:text-[#F2A7BC]">
                View all
              </Link>
            </div>

            <div className="no-scrollbar overflow-x-auto">
              <div className="grid w-max grid-flow-col gap-4 pb-2">
                {mangaCatalog.slice(0, 4).map((manga) => (
                  <div key={manga.id} className="w-64">
                    <MangaCard manga={manga} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6">
          <RandomSuggestion />
        </div>
      </PageContainer>
    </>
  );
};

export default MangaProfile;
