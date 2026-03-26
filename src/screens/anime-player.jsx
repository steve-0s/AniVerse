import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header.jsx';
import AnimeDetails from '../components/anime-details.jsx';

const AnimePlayer = () => {
    return (
        <div className="anime-player">
            <Header />
            {/* player + episodes*/}
            <div className="player-content h-[35vw] min-h-[300px] grid grid-cols-[3fr_1fr] gap-1 p-6">
                {/* player */}
                <div className="player">
                    {/* player content */}
                </div>
                {/* season + episodes */}
                <div className="bg-gray-900 backdrop-blur-sm p-4 overflow-y-auto flex flex-col gap-4">
                    {/* season list */}
                    <h3 className="text-lg font-bold text-red-800">Seasons</h3>
                    <div className="flex flex-wrap gap-3 items-center justify-start max-h-25 overflow-y-auto">
                        <button className="text-left text-sm text-gray-300 hover:text-red-800 hover:border-red-800 transition-colors border border-white/50 rounded-lg p-2
                        min-w-20 flex item-center justify-center">
                            Season 1
                        </button>
                        <button className="text-left text-sm text-gray-300 hover:text-red-800 hover:border-red-800 transition-colors border border-white/50 rounded-lg p-2
                        ">
                            Season 2
                        </button>
                    </div>
                    {/*episode list */}
                    <h3 className="text-lg font-bold text-red-800">Episodes</h3>
                    <div className="flex flex-wrap gap-2 ml-1 max-h-60 items-center justify-start overflow-y-auto">
                        <button className="text-left text-sm text-gray-300 transition-colors p-3 rounded-md bg-gray-800/50 border border-gray-700/50 hover:bg-red-800
                        flex items-center justify-center min-w-12">
                            1
                        </button>
                        <button className="text-left text-sm text-gray-300 transition-colors p-3 rounded-md bg-gray-800/50 border border-gray-700/50 hover:bg-red-800
                        flex items-center justify-center min-w-12">
                            2
                        </button>
                    </div>
                </div>
            </div>
            {/* anime info */}
            <AnimeDetails />
        </div>
    )
}

export default AnimePlayer;
