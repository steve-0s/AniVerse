import React from 'react';

const animeLibrary = {
    1: {
    title: 'Naruto',
    description: 'A young ninja with dreams of becoming the strongest ninja and village leader. A young ninja with dreams of becoming the strongest ninja and village leader.A young ninja with dreams of becoming the strongest ninja and village leader.A young ninja with dreams of becoming the strongest ninja and village leader.',
    genres: ['Action', 'Adventure', 'Fantasy'],
    studio: 'Pierrot',
    year: '2002',
    rating: 8.3,
    episodes: 220,
    status: 'Completed',
    image: '/images/naruto.jpg',
    },
    2: {
    title: 'Attack on Titan',
    description: 'Humanity fights against giant Titans while discovering dark secrets about their world.',
    genres: ['Action', 'Drama', 'Dark Fantasy'],
    studio: 'MAPPA',
    year: '2013',
    rating: 9.0,
    episodes: 87,
    status: 'Completed',
    image: '/images/aot.jpg',
    },
    3: {
    title: 'Demon Slayer',
    description: 'A youth becomes a demon slayer to avenge his family and save his sister.',
    genres: ['Action', 'Supernatural', 'Adventure'],
    studio: 'Ufotable',
    year: '2019',
    rating: 8.7,
    episodes: 44,
    status: 'Completed',
    image: '/images/demonslayer.jpg',
    },
};

const animeDetails = () => {
    return (
        <div className='p-6 max-h-30vh overflow-y-auto'>
        {/* anime details */}
                <div className='anime-details p-10 rounded-lg bg-transparent backdrop-blur-sm grid grid-cols-[250px_1fr] gap-8'>
                    <img
                        src={animeLibrary[1].image}
                        alt={animeLibrary[1].title}
                        className="w-64 h-auto mb-4"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">{animeLibrary[1].title}</h2>
                        <p className="text-gray-300 text-sm inline-clamp-5">{animeLibrary[1].description}</p> 
                        <div className="flex flex-wrap gap-4">
                            <span className="text-xs text-gray-400">Studio: {animeLibrary[1].studio}</span>
                            <span className="text-xs text-gray-400">Year: {animeLibrary[1].year}</span>
                            <span className="text-xs text-gray-400">Rating: {animeLibrary[1].rating}</span>
                            <span className="text-xs text-gray-400">Episodes: {animeLibrary[1].episodes}</span>
                            <span className="text-xs text-gray-400">Status: {animeLibrary[1].status}</span>
                        </div>
                    </div>
                </div> 
            </div>
    )
}
export default animeDetails;