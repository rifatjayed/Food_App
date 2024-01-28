import React from 'react'
import { FaFacebookSquare ,FaDribbbleSquare , FaGitSquare , FaInstagramSquare , FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500' >YumEats</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quas blanditiis laudantium ipsam molestias provident, asperiores, at nesciunt voluptas obcaecati nam quam expedita sapiente assumenda recusandae necessitatibus consectetur perferendis!
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
              <FaDribbbleSquare size={30}></FaDribbbleSquare>  
              <FaFacebookSquare size={30}></FaFacebookSquare>
           <FaGitSquare size={30}></FaGitSquare>
           <FaInstagramSquare size={30}></FaInstagramSquare>
           <FaTwitterSquare size={30}></FaTwitterSquare>
            </div>
            </div>


            <div className='lg:col-span-2 flex justify-between mt-6'>
<div>
    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
    <ul>
        <li className='py-2 text-sm'>New York</li>
        <li className='py-2 text-sm'>Usa</li>
        <li className='py-2 text-sm'>India</li>
        <li className='py-2 text-sm'>Canada</li>
       
    </ul>
</div>


<div>
    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
    <ul>
        <li className='py-2 text-sm'>New York</li>
        <li className='py-2 text-sm'>Usa</li>
        <li className='py-2 text-sm'>India</li>
        <li className='py-2 text-sm'>Canada</li>
       
    </ul>
</div>


<div>
    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
    <ul>
        <li className='py-2 text-sm'>New York</li>
        <li className='py-2 text-sm'>Usa</li>
        <li className='py-2 text-sm'>India</li>
        <li className='py-2 text-sm'>Canada</li>
       
    </ul>
</div>
<div>
    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
    <ul>
        <li className='py-2 text-sm'>New York</li>
        <li className='py-2 text-sm'>Usa</li>
        <li className='py-2 text-sm'>India</li>
        <li className='py-2 text-sm'>Canada</li>
       
    </ul>
</div>
            </div>
        </div>
    </div>
  )
}

export default Footer