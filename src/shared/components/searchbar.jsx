import { Search } from 'react-feather';

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = 'Search titles...' }) => {
  return (
    <div className="search w-[40vw]">
      <div className="relative rounded-lg border border-white/50">
        <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-200" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent py-3 pl-10 pr-3 text-white outline-none"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

const SmallSearchBar = ({
  searchTerm,
  setSearchTerm,
  placeholder = 'Search titles...',
  theme = 'anime'
}) => {
  const isManga = theme === 'manga';

  return (
    <div className="w-64">
      <div
        className={`relative flex items-center rounded-full px-3 py-1.5 ${
          isManga ? 'border border-white/20 bg-black' : 'border border-white/20 bg-black'
        }`}
      >
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent pl-8 text-sm text-gray-200 outline-none placeholder-gray-400"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
export { SmallSearchBar };
