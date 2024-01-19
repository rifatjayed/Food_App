import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";

import { BsFillCartFill } from "react-icons/bs";



const TopNav = () => {
    const [sideNav, setSideNav]= useState(false)
    console.log(sideNav)
    return (
        <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25} />

                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Yum
                    <span>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
                    <p className='p-2 text-bold'>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}></AiOutlineSearch>
                <input className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search Meal' type="text" />
            </div>
            <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20}/>
            Cart

            </button>
            <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>
        </div>
    );
};

export default TopNav;