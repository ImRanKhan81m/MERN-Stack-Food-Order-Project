import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Popular/>
        </div>
    );
};

export default Home;