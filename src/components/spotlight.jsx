import React, { useState, useEffect } from 'react'
import { Play, Info, ChevronRight, ChevronLeft} from 'react-feather'

const spotlights = [
    {
        id: 1,
        label: "Trending",
        title: "Naruto",
        description: "This is the anime description for Naruto.",
        genres: ["Action", "Adventure", "Fantasy"],
        image: null,
    },
    {
        id: 2,
        label: "Featured",
        title: "Attack on Titan",
        description: "This is the anime description for Attack on Titan.",
        genres: ["Action", "Drama", "Dark Fantasy"],
        image: null,
    },
    {
        id: 3,
        label: "Popular",
        title: "Demon Slayer",
        description: "This is the anime description for Demon Slayer.",
        genres: ["Action", "Supernatural", "Adventure"],
        image: null,
    },
];

const SpotLight = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSpotlight = () => {
        setCurrentIndex((prev) => prev === 0 ? spotlights.length - 1 : prev - 1
    );
    };

    const nextSpotlight = () => {
        setCurrentIndex((prev) => prev === spotlights.length - 1 ? 0 : prev + 1
        );
    };

const currentSpotlight = spotlights[currentIndex];

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
            prev === spotlights.length - 1 ? 0 : prev + 1
        );
    }, 5000);
    return () => clearInterval(interval);
}, []);

    return (
        <div className='spotlight relative'>
            {/* anime spotlight card */}
            <div className='h-[30vw] min-h-[400px] w-auto bg-gray-500 grid grid-cols-1 md:grid-cols-2 gap-0'>
                {/* anime info container */}
                <div className='max-h-full flex flex-col justify-start items-start gap-4 p-5 bg-black/50 backdrop-blur-sm h-full'>
                    {/* rank number */}
                    <span className='text-2xl text-red-700 font-bold mb-12'>{currentSpotlight.label}</span>

                    {/* anime title */}
                    <h2 className='text-4xl text-white font-bold inline-clamp-2'>{currentSpotlight.title}</h2>

                    {/* anime description */}
                    <p className='text-gray-300 text-sm line-clamp-4'>{currentSpotlight.description}</p>

                    <div className="flex gap-3 flex-wrap">
                        {currentSpotlight.genres.map((genre, index) => (
                            <span key={index} className="text-xs text-red-500">
                            {genre}
                            </span>
                            ))  
                        }
                    </div>

                    {/* action buttons */}
                    <div className='flex gap-7 mt-auto'>
                        <button className='flex items-center bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800'>
                            <Play size={18} className='mr-2 inline-block'/>
                            Watch Now
                            </button>
                        <button className='flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600'>
                            <Info size={18} className='mr-2 inline-block'/>
                            More Info
                            </button>
                    </div>
                </div>
                {/* image container */}
                <div className='relative h-full w-full'>
                    {/* image */}
                </div>
            </div>
            {/* navigation buttons */}
            <div className='absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4'>
                <button className='bg-gray-700 text-white p-2 rounded-full hover:bg-red-600' onClick={prevSpotlight}>
                    <ChevronLeft size={24} />
                </button>
                <button className='bg-gray-700 text-white p-2 rounded-full hover:bg-red-600' onClick={nextSpotlight}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default SpotLight;