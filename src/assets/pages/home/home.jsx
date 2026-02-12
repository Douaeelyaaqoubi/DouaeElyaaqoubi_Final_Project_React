import React from 'react';
import Nav_barr from '../../../componets/nav_barr';
import 'flowbite';
import Footer from '../../../componets/footer';
import Carouesell from './carousel';


const Home = () => {
    return (
        <>
            <Nav_barr/>
            <Carouesell/>
            <Footer/>
        </>
    );
};

export default Home;
