import { Search } from 'react-feather'

const SearchBar = (props) => {
    return (
        <div className="search w-[40vw]">
            <div className="border border-white/50 rounded-lg">
                <Search className="absolute left-2 h-5 w-5 text-gray-200" />
                <input type="text" placeholder="Search Anime..." 
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

const SmallSearchBar = (props) => {
    return (
    <div className="w-64">
        <div className="relative flex items-center bg-black border border-white/20 rounded-full px-3 py-1.5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
            <input type="text" placeholder="Search Anime..."
            className="w-full bg-black/50 outline-none text-sm text-gray-200 pl-8 placeholder-gray-300"
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
            />
        </div>
    </div>
    )
}

export default SearchBar
export { SmallSearchBar }