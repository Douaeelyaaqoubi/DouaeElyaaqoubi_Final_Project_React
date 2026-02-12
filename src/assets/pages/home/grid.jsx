import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Img } from "../../../constants/img";
import React from "react";

const Grid = () => {
    return (
        <div className="h-[110vh] flex justify-center items-center p-5">
            <div className="w-[80vw] h-[110vh] flex justify-between p-[10vh] gap-5">


                <div className="w-[30%] h-full flex flex-col gap-5">
                    <div className="h-[100%] relative overflow-hidden">
                        <motion.img
                            src={Img.banner02}
                            alt="DRESSES"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className="  absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                            <p className="text-center mt-2  font-light  ">DRESSES</p>
                        </Link>
                    </div>

                    <div className="h-[40%] relative overflow-hidden">
                        <motion.img
                            src={Img.card4}
                            alt="SUNGLASSES"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className=" absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                            <p className="text-center mt-2 font-light ">SUNGLASSES</p>
                        </Link>
                    </div>
                </div>


                <div className="w-[30%] h-full flex flex-col gap-5">
                    <div className="h-[40%] relative overflow-hidden">
                        <motion.img
                            src={Img.card2}
                            alt="WATCHES"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className=" absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                            <p className="text-center mt-2 font-light ">WATCHES</p>
                        </Link>
                    </div>

                    <div className="h-[60%] relative overflow-hidden">
                        <motion.img
                            src={Img.card5}
                            alt="FOOTWEAR"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className=" absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                        <p className="text-center mt-2 font-light ">FOOTWEAR</p>
                        </Link>
                    </div>
                </div>


                <div className="w-[30%] h-full flex flex-col gap-5">
                    <div className="h-[60%] relative overflow-hidden">
                        <motion.img
                            src={Img.card3}
                            alt="BAGS"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className=" absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                        <p className="text-center mt-2 font-light ">BAGS</p>
                        </Link>
                    </div>

                    <div className="h-[40%] relative overflow-hidden">
                        <motion.img
                            src={Img.card6}
                            alt="DRESSES"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <Link
                        to={"shop"}
                            whileHover={{ scale: 1.05 }}
                            className=" absolute bottom-5 left-6 h-12 w-52 bg-white text-black hover:bg-[#E65540] hover:text-white"
                        >
                        <p className="text-center mt-2 font-light ">ACCESSORIES</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Grid;
