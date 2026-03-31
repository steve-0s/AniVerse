const FilterPanel = ({ filters, setFilters, genres = [] }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-red-300">Filters</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <select
          value={filters.genre}
          onChange={(e) => setFilters((prev) => ({ ...prev, genre: e.target.value }))}
          className="rounded-md border border-white/20 bg-gray-900 px-3 py-2 text-sm"
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
          className="rounded-md border border-white/20 bg-gray-900 px-3 py-2 text-sm"
        >
          <option value="all">All Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="rounded-md border border-white/20 bg-gray-900 px-3 py-2 text-sm"
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
