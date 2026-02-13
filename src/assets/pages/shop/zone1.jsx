import React from 'react';

const Zone1 = () => {
    return ( 
        <>
            <div className='flex justify-between px-[12vw] py-4'>

                <div>
                    <div>

                        <h1 className=''>Categories</h1>
                        <ul>
                            <li>Best Seller (8 items)</li>
                            <li>Featured (8 items)</li>
                            <li>Men (8 items)</li>
                            <li>Women (8 items)</li>
                        </ul>


                    </div>


                    <div >
                        <h1 className=''>Color</h1>
                        <ul>

                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">black</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">gray</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">red</label>
                            </li>

                        </ul>
                    </div>

                    <div >
                        <h1 className=''>Price</h1>
                        <ul>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">0-20</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">20-40</label>
                            </li>
                        </ul>
                    </div>


                    <div >
                        <h1 className=''>Size</h1>
                        <ul>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">XL</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">L</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">M</label>
                            </li>
                            <li className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="">S</label>
                            </li>
                        </ul>
                    </div>

                    <input  className='outline-0' type="text" placeholder='search...' />

                </div>





                <div>

                    ssss
                </div>
            </div>
        </>
    );
};

export default Zone1;