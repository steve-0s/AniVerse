import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animeCatalog } from '../../features/anime/data/mock-anime.js';
import AnimeCard from '../../features/anime/components/anime-card.jsx';
import { mangaCatalog } from '../../features/manga/data/mock-manga.js';
import MangaCard from '../../features/manga/components/manga-card.jsx';
import Header from '../components/header.jsx';
import PageContainer from '../ui/page-container.jsx';
import Pagination from '../ui/pagination.jsx';

const PROFILE_TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'continue-watching', label: 'Continue Watching' },
  { id: 'continue-reading', label: 'Continue Reading' },
  { id: 'watchlist', label: 'Watch List' },
  { id: 'readlist', label: 'Read List' }
];

const WATCH_STATUSES = ['Watching', 'On Hold', 'Plan to Watch', 'Dropped', 'Completed'];
const READ_STATUSES = ['Reading', 'On Hold', 'Plan to Read', 'Dropped', 'Completed'];
const GRID_PAGE_SIZE = 20;
const PROFILE_SHELL_CLASS = 'bg-gradient-to-br from-zinc-950 via-black to-rose-950/20';
const PROFILE_CARD_CLASS = 'bg-gradient-to-br from-black to-zinc-950';
const PROFILE_ACCENT_CLASS = 'text-rose-200';
const PROFILE_HIGHLIGHT_BUTTON_CLASS = 'bg-rose-300 text-black hover:bg-rose-200';
const PROFILE_IDLE_BUTTON_CLASS = 'border border-white/15 bg-black/40 text-gray-300 hover:text-rose-200';
const PROFILE_FIELD_CLASS = 'w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none';

const buildProfileEntries = (items, statuses, repeatCount, extraFields = () => ({})) =>
  Array.from({ length: repeatCount }).flatMap((_, repeatIndex) =>
    items.map((item, itemIndex) => ({
      ...item,
      profileEntryId: `${item.id}-${repeatIndex}`,
      profileStatus: statuses[(repeatIndex + itemIndex) % statuses.length],
      ...extraFields(item, repeatIndex, itemIndex)
    }))
  );

const animeContinueEntries = buildProfileEntries(
  animeCatalog,
  ['Watching'],
  4,
  (anime, repeatIndex, itemIndex) => ({
    progressLabel: `S${(repeatIndex % 3) + 1} • E${((itemIndex + repeatIndex) % 12) + 1}`
  })
);

const mangaContinueEntries = buildProfileEntries(
  mangaCatalog,
  ['Reading'],
  4,
  (manga, repeatIndex, itemIndex) => ({
    progressLabel: `Vol ${(repeatIndex % 4) + 1} • Ch ${((itemIndex + 1) * 3) + repeatIndex}`
  })
);

const animeWatchlistEntries = buildProfileEntries(animeCatalog, WATCH_STATUSES, 5);
const mangaReadlistEntries = buildProfileEntries(mangaCatalog, READ_STATUSES, 5);

const paginateItems = (items, page, pageSize) => {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    pagedItems: items.slice(startIndex, startIndex + pageSize),
    safePage,
    totalPages
  };
};

const TabButton = ({ active, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
      active
        ? PROFILE_HIGHLIGHT_BUTTON_CLASS
        : PROFILE_IDLE_BUTTON_CLASS
    }`}
  >
    {label}
  </button>
);

const FilterPills = ({ options, selected, onSelect }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onSelect(option)}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          selected === option
            ? PROFILE_HIGHLIGHT_BUTTON_CLASS
            : PROFILE_IDLE_BUTTON_CLASS
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

const GridSection = ({
  title,
  subtitle,
  items,
  page,
  onPageChange,
  renderCard,
  emptyMessage = 'No items here yet.'
}) => {
  const { pagedItems, safePage, totalPages } = paginateItems(items, page, GRID_PAGE_SIZE);

  return (
    <section className={`rounded-2xl border border-white/10 p-5 ${PROFILE_SHELL_CLASS}`}>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className={`text-2xl font-bold ${PROFILE_ACCENT_CLASS}`}>{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
        </div>
        <p className="text-sm text-gray-400">{items.length} titles</p>
      </div>

      {pagedItems.length ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {pagedItems.map(renderCard)}
        </div>
      ) : (
        <div className={`rounded-xl border border-white/10 p-6 text-sm text-gray-400 ${PROFILE_CARD_CLASS}`}>{emptyMessage}</div>
      )}

      <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={onPageChange} />
    </section>
  );
};

const SharedProfile = () => {
  const { pathname } = useLocation();
  const isMangaMode = pathname.startsWith('/manga');
  const accountName = 'Steve';
  const [activeTab, setActiveTab] = useState('profile');
  const [continueWatchingPage, setContinueWatchingPage] = useState(1);
  const [continueReadingPage, setContinueReadingPage] = useState(1);
  const [watchListPage, setWatchListPage] = useState(1);
  const [readListPage, setReadListPage] = useState(1);
  const [watchStatusFilter, setWatchStatusFilter] = useState('All');
  const [readStatusFilter, setReadStatusFilter] = useState('All');

  const filteredWatchlist = useMemo(() => {
    if (watchStatusFilter === 'All') {
      return animeWatchlistEntries;
    }

    return animeWatchlistEntries.filter((entry) => entry.profileStatus === watchStatusFilter);
  }, [watchStatusFilter]);

  const filteredReadlist = useMemo(() => {
    if (readStatusFilter === 'All') {
      return mangaReadlistEntries;
    }

    return mangaReadlistEntries.filter((entry) => entry.profileStatus === readStatusFilter);
  }, [readStatusFilter]);

  return (
    <>
      <Header />
      <PageContainer>
        <div className="space-y-6">
          <section className={`rounded-2xl border border-white/10 p-5 ${PROFILE_SHELL_CLASS}`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className={`text-sm ${PROFILE_ACCENT_CLASS}`}>Hi, {accountName}</p>
                <h2 className="mt-1 text-3xl font-bold text-white">Account Center</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Manage your profile, track progress, and organize both anime and manga in one place.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {PROFILE_TABS.map((tab) => (
                  <TabButton
                    key={tab.id}
                    active={activeTab === tab.id}
                    label={tab.label}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>
            </div>
          </section>

          {activeTab === 'profile' && (
            <section className={`rounded-2xl border border-white/10 p-5 ${PROFILE_SHELL_CLASS}`}>
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div className={`rounded-2xl border border-white/10 p-5 text-center ${PROFILE_CARD_CLASS}`}>
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-black text-3xl font-bold text-white">
                    S
                  </div>
                  <button
                    type="button"
                    className={`mt-4 rounded-md px-4 py-2 text-sm font-semibold transition ${PROFILE_HIGHLIGHT_BUTTON_CLASS}`}
                  >
                    Change Profile Picture
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm text-gray-300">Name</span>
                    <input
                      type="text"
                      defaultValue="Steve Cruz"
                      className={PROFILE_FIELD_CLASS}
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-gray-300">Username</span>
                    <input
                      type="text"
                      defaultValue="steveverse"
                      className={PROFILE_FIELD_CLASS}
                    />
                  </label>
                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm text-gray-300">Email Address</span>
                    <input
                      type="email"
                      defaultValue="steve@aniverse.app"
                      className={PROFILE_FIELD_CLASS}
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-gray-300">New Password</span>
                    <input
                      type="password"
                      placeholder="Enter a new password"
                      className={PROFILE_FIELD_CLASS}
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-gray-300">Confirm Password</span>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className={PROFILE_FIELD_CLASS}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${PROFILE_HIGHLIGHT_BUTTON_CLASS}`}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:text-rose-200"
                >
                  Change Password
                </button>
              </div>
            </section>
          )}

          {activeTab === 'continue-watching' && (
            <GridSection
              title="Continue Watching"
              subtitle="A paginated 4 x 5 grid of your in-progress anime."
              items={animeContinueEntries}
              page={continueWatchingPage}
              onPageChange={setContinueWatchingPage}
              renderCard={(anime) => (
                <div key={anime.profileEntryId} className="w-full min-w-0">
                  <p className="mb-2 text-xs text-gray-400">{anime.progressLabel}</p>
                  <AnimeCard anime={anime} compact />
                </div>
              )}
            />
          )}

          {activeTab === 'continue-reading' && (
            <GridSection
              title="Continue Reading"
              subtitle="Your manga queue, structured like continue watching."
              items={mangaContinueEntries}
              page={continueReadingPage}
              onPageChange={setContinueReadingPage}
              renderCard={(manga) => (
                <div key={manga.profileEntryId} className="w-full min-w-0">
                  <p className="mb-2 text-xs text-gray-400">{manga.progressLabel}</p>
                  <MangaCard manga={manga} compact />
                </div>
              )}
            />
          )}

          {activeTab === 'watchlist' && (
            <section className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className={`text-2xl font-bold ${PROFILE_ACCENT_CLASS}`}>Watch List</h3>
                  <p className="mt-1 text-sm text-gray-400">Filter anime by watching status and page through your list.</p>
                </div>
                <Link to="/browse" className="text-sm text-gray-300 hover:text-rose-200">
                  Browse more anime
                </Link>
              </div>

              <FilterPills
                options={['All', ...WATCH_STATUSES]}
                selected={watchStatusFilter}
                onSelect={(value) => {
                  setWatchStatusFilter(value);
                  setWatchListPage(1);
                }}
              />

              <GridSection
                title="My Watch List"
                items={filteredWatchlist}
                page={watchListPage}
                onPageChange={setWatchListPage}
                emptyMessage="No anime found for this watch status."
                renderCard={(anime) => (
                  <div key={anime.profileEntryId} className="w-full min-w-0">
                    <p className="mb-2 text-xs text-gray-400">{anime.profileStatus}</p>
                    <AnimeCard anime={anime} compact />
                  </div>
                )}
              />
            </section>
          )}

          {activeTab === 'readlist' && (
            <section className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className={`text-2xl font-bold ${PROFILE_ACCENT_CLASS}`}>Read List</h3>
                  <p className="mt-1 text-sm text-gray-400">Filter manga by reading status and move through pages.</p>
                </div>
                <Link to="/manga/browse" className="text-sm text-gray-300 hover:text-rose-200">
                  Browse more manga
                </Link>
              </div>

              <FilterPills
                options={['All', ...READ_STATUSES]}
                selected={readStatusFilter}
                onSelect={(value) => {
                  setReadStatusFilter(value);
                  setReadListPage(1);
                }}
              />

              <GridSection
                title="My Read List"
                items={filteredReadlist}
                page={readListPage}
                onPageChange={setReadListPage}
                emptyMessage="No manga found for this read status."
                renderCard={(manga) => (
                  <div key={manga.profileEntryId} className="w-full min-w-0">
                    <p className="mb-2 text-xs text-gray-400">{manga.profileStatus}</p>
                    <MangaCard manga={manga} compact />
                  </div>
                )}
              />
            </section>
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default SharedProfile;
