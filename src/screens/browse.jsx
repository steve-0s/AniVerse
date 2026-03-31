import { useMemo, useState } from 'react';
import Header from '../components/common/header.jsx';
import PageContainer from '../components/ui/page-container.jsx';
import FilterPanel from '../components/common/filter-panel.jsx';
import AnimeCard from '../components/common/anime-card.jsx';
import EmptyState from '../components/ui/empty-state.jsx';
import Pagination from '../components/ui/pagination.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const PAGE_SIZE = 6;

const Browse = () => {
  const [filters, setFilters] = useState({ genre: 'all', status: 'all', sort: 'popular' });
  const [page, setPage] = useState(1);

  const genres = useMemo(() => {
    return [...new Set(animeCatalog.flatMap((anime) => anime.genres))];
  }, []);

  const filtered = useMemo(() => {
    let items = [...animeCatalog];

    if (filters.genre !== 'all') {
      items = items.filter((anime) => anime.genres.includes(filters.genre));
    }

    if (filters.status !== 'all') {
      items = items.filter((anime) => anime.status === filters.status);
    }

    if (filters.sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'latest') {
      items.sort((a, b) => b.year - a.year);
    }

    return items;
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <>
      <Header />
      <PageContainer title="Browse Anime" subtitle="Discover by genre, status, and ranking.">
        <FilterPanel filters={filters} setFilters={setFilters} genres={genres} />

        <section className="mt-5">
          {pagedItems.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pagedItems.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          ) : (
            <EmptyState title="No anime match your filters" />
          )}
        </section>

        <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setPage} />
      </PageContainer>
    </>
  );
};

export default Browse;
