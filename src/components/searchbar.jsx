import { Search } from 'react-feather'

const App = () => {
    return (
        <div className="search w-[40vw]">
            <div className="border border-white/50 rounded-lg">
                <Search className="absolute left-2 h-5 w-5 text-gray-200" />
                <input type="text" placeholder="Search Anime..." />
            </div>
        </div>
    )
}

export default App