import React from 'react';
import About from '../About/About';
import Album from '../Album/Album';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Popular/>
            <Album/>
            <Menu/>
            <Order/>
        </div>
    );
};

export default Home;