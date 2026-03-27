
import React from 'react'

const top10ThisSeason = () => {
    const trendingAnimes = [
        {
            id: 1,
            title: "Jujutsu Kaisen: The Culling Game Part 1",
            image: null,
        },
        {
            id: 2,
            title: "Sentenced to Be a Hero",
            image: null,
        },
        {
            id: 3,
            title: "Hell's Paradise Season 2",
            image: null,
        },
        {
            id: 4,
            title: "Dead Account",
            image: null,
        },
        {
            id: 5,
            title: "One Piece",
            image: null,
        },
                {
            id: 6,
            title: "Jack of All Trades, Party of None",
            image: null,
        },
                {
            id: 7,
            title: "Golden Kamuy FInal Season",
            image: null,
        },
                {
            id: 8,
            title: "Chain Soldier Season 2",
            image: null,
        },
                {
            id: 9,
            title: "You Can't Be In a Rom-COm with Your Childhood Friends!",
            image: null,
        },
                {
            id: 10,
            title: "There was a Cute Girl in the Hero;s Party, so i Tried Confessing to Her",
            image: null,
        },
    ];

    return (
        <div className='max-h-70'>
            <h3 className='text-2xl text-red-700 font-bold mb-5 ml-5'>Top 10 This Season</h3>
            <div className='trending overflow-x-auto mt-5 no-scrollbar'>
                <div className='flex w-max h-70 gap-4 px-5 pb-3 overflow-x-auto'>
                    {trendingAnimes.map((anime) => (
                        <div key={anime.id} className='relative w-48 h-64 bg-gray-800 rounded-lg flex-shrink-0'>
                            {/* image placeholder */}
                            <div className='absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/70' />
                            <div className='relative z-10 p-4 h-full flex flex-col justify-between'>
                                <span className='text-sm text-red-700 font-bold'>{anime.id}</span>
                                <h4 className='text-sm text-white font-bold line-clamp-4'>
                                    {anime.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default top10ThisSeason

