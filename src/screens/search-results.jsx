import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/common/header.jsx';
import PageContainer from '../components/ui/page-container.jsx';
import AnimeCard from '../components/common/anime-card.jsx';
import EmptyState from '../components/ui/empty-state.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) {
      return animeCatalog;
    }

    return animeCatalog.filter((anime) => {
      const text = `${anime.title} ${anime.description} ${anime.genres.join(' ')}`.toLowerCase();
      return text.includes(query);
    });
  }, [query]);

  return (
    <>
      <Header />
      <PageContainer
        title="Search Results"
        subtitle={query ? `Showing matches for "${query}".` : 'Showing all anime.'}
      >
        {results.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <EmptyState title="No results found" message="Try another keyword or visit Browse." />
        )}
      </PageContainer>
    </>
  );
};

export default SearchResults;
