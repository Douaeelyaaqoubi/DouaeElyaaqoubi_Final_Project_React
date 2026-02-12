import React from 'react';
import Nav_barr from '../../../componets/nav_barr';
import 'flowbite';
import Footer from '../../../componets/footer';
import Carouesell from './carousel';
import Grid from './grid';


const Home = () => {
    return (
        <>
            <Nav_barr/>
            <Carouesell/>
            <Grid/>
            <Footer/>
        </>
    );
};

export default Home;
