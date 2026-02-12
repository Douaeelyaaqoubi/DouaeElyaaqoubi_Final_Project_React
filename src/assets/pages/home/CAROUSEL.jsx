import React, { useState } from 'react';
import { Img } from '../../../constants/img';
import { motion } from "framer-motion";

const slides = [
    { img: Img.carousel1, subtitle: "Women Collection 2018", title: "NEW ARRIVALS" },
    { img: Img.carousel2, subtitle: "Men Collection 2018", title: "TRENDY LOOKS" },
    { img: Img.carousel3, subtitle: "Summer Collection", title: "HOT DEALS" },
];

const Carouesell = () => {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div>
            <div className="relative w-full h-[90vh] overflow-hidden">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 ${i === current ? "block" : "hidden"}`}
                    >
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="h-full object-cover w-full"
                        />

                        <motion.div
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center text-white"
                        >
                            <p className="text-sm md:text-base mb-2">{slide.subtitle}</p>
                            <h1 className="text-7xl font-bold mb-4">{slide.title}</h1>
                            <button className="bg-white font-light text-black px-6 py-2 rounded-full hover:bg-[#e65540] hover:text-white transition">
                                SHOP NOW
                            </button>
                        </motion.div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    type="button"
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800/40 hover:bg-gray-800/60 text-white w-10 h-10 flex items-center justify-center rounded-full"
                >
                    &#10094;
                </button>

                <button
                    onClick={nextSlide}
                    type="button"
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-800/40 hover:bg-gray-800/60 text-white w-10 h-10 flex items-center justify-center rounded-full"
                >
                    &#10095;
                </button>

            </div>
        </div>
    );
};

export default Carouesell;
