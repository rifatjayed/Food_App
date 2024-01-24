import React from 'react';
import TopNav from './TopNav';
import Featured from './Featured';

const Delivery = () => {
    return (
        <div className=' bg-white py-16 px-4'>
<h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1520px] mx-auto grid md:grid-col-2'>
<img className='w-[550px] mx-auto my-4' src="https://quickeat-react.vercel.app/assets/img/photo-1.png" alt="" />
</div>
<div className='flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold '>Get The App</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
</div>
      
        </div>
    );
};

export default Delivery;