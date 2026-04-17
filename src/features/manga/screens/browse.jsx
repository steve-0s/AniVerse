import { useMemo, useState } from 'react';
import Header from '../../../shared/components/header.jsx';
import EmptyState from '../../../shared/ui/empty-state.jsx';
import PageContainer from '../../../shared/ui/page-container.jsx';
import Pagination from '../../../shared/ui/pagination.jsx';
import MangaCard from '../components/manga-card.jsx';
import FilterPanel from '../components/filter-panel.jsx';
import { mangaCatalog } from '../data/mock-manga.js';

const PAGE_SIZE = 6;

const MangaBrowse = () => {
  const [filters, setFilters] = useState({ genre: 'all', status: 'all', sort: 'popular' });
  const [page, setPage] = useState(1);

  const genres = useMemo(() => [...new Set(mangaCatalog.flatMap((manga) => manga.genres))], []);

  const filtered = useMemo(() => {
    let items = [...mangaCatalog];

    if (filters.genre !== 'all') {
      items = items.filter((manga) => manga.genres.includes(filters.genre));
    }

    if (filters.status !== 'all') {
      items = items.filter((manga) => manga.status === filters.status);
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
      <PageContainer title="Browse Manga" subtitle="Explore by genre, status, and critical acclaim." theme="manga">
        <FilterPanel filters={filters} setFilters={setFilters} genres={genres} />

        <section className="mt-5">
          {pagedItems.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pagedItems.map((manga) => (
                <MangaCard key={manga.id} manga={manga} />
              ))}
            </div>
          ) : (
            <EmptyState title="No manga match your filters" theme="manga" />
          )}
        </section>

        <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setPage} />
      </PageContainer>
    </>
  );
};

export default MangaBrowse;
