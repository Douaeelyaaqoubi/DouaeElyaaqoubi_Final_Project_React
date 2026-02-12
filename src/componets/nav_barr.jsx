// import React from 'react';
import React, { useState } from 'react';


const Nav_barr = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav className="fixed t-0 z-20 w-full bg-white flex  justify-between items-center  py-4 shadow px-[5vw]">
            

                <a href="#" className="flex  items-center space-x-3">
                    <p className='font-extrabold self-center  text-5xl '>Fashe</p> <span className="self-center text-5xl font-bold tracking-widest text-heading text-[#e65540]">.</span>
                </a>


                <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-neutral-primary">
                        
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Home</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Shop</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Sale</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Features</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Blog</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">About</a></li>
                        <li><a href="#" className="block py-2 px-3 hover:text-fg-brand">Contact</a></li>

                </ul>
                
            
        
                <div className='flex gap-4 items-center'>
    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#d3d3d3"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path></svg>

                    <p className='font-light text-[#d3d3d3]'>|</p>

                    <div className="relative">

                        <svg
                            onClick={() => setCount(count + 1)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                            fill="#d3d3d3"
                            className="cursor-pointer">
                            <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path></svg>

                        {count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {count}
                            </span>
                        )}

                    </div>

            </div>



            </nav>

        </>
    );
};

export default Nav_barr;