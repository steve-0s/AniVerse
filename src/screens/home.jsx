import React from 'react'
import Header from '../components/header.jsx'
import SpotLight from '../components/spotlight.jsx';
import Trending from '../components/trending.jsx';
import Top10 from '../components/top-anime-thisSeason'

const Home = () => {
    return (
        <main>
            <Header />
            <div className='home'>
                {/* top 10 this season */}
                <SpotLight />
                {/* trending */}
                <div className='mt-5'>
                    <Trending />
                </div>
                <div className='mt-10'>
                    <Top10 />
                </div>
            </div>
        </main>
    )
}

export default Home