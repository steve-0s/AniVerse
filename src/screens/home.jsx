import React from 'react'
import Header from '../components/header.jsx'
import SpotLight from '../components/spotlight.jsx';
import Trending from '../components/trending.jsx';

const Home = () => {
    return (
        <main>
            <Header />
            <div className='home'>
                {/* top 10 this season */}
                <SpotLight />
                {/* trending */}
                <Trending />
            </div>
        </main>
    )
}

export default Home