import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../../shared/components/header.jsx';
import EmptyState from '../../../shared/ui/empty-state.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import MangaCard from '../components/manga-card.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const MangaSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) {
      return mangaCatalog;
    }

    return mangaCatalog.filter((manga) => {
      const text = `${manga.title} ${manga.description} ${manga.genres.join(' ')}`.toLowerCase();
      return text.includes(query);
    });
  }, [query]);

  return (
    <>
      <Header />
      <PageContainer
        title="Search Results"
        subtitle={query ? `Showing manga matches for "${query}".` : 'Showing all manga.'}
      >
        {results.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        ) : (
          <EmptyState title="No results found" message="Try another keyword or visit Browse." />
        )}
      </PageContainer>
    </>
  );
};

export default MangaSearchResults;
