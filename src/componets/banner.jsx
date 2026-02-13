import React from 'react';
import { Img } from '../constants/img';

const Banner = () => {
    return (
        <>
        <div>
            <img src={Img.banner}  className='w-[100vw] h-[45vh] object-cover relative ' />
            <p className='absolute top-45 left-143 text-white text-6xl font-bold '>PRODUCTS</p>
        </div>
        </>
        
    );
};

export default Banner;