const FilterPanel = ({ filters, setFilters, genres = [] }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-white">Filters</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <select
          value={filters.genre}
          onChange={(e) => setFilters((prev) => ({ ...prev, genre: e.target.value }))}
          className="rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white"
        >
          <option value="all">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          value={filters.status}
          onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
          className="rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white"
        >
          <option value="all">All Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Hiatus">Hiatus</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="latest">Latest Year</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
