import React from 'react';
import { mealData } from '../Data/data';
import { FaLongArrowAltRight } from "react-icons/fa";


const Meal = () => {
    return (
        <div>
                     <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
     <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center'>
            <button>All</button>
            <button>Pizza</button>
            <button>Chicken</button>
            <button>Salad</button>

        </div>
     </div>
       <div className='p-5 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
{
    mealData.map((item)=>(
        <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img src={item.image} alt=""  className='w-full h-[200px] object-cover rounded-lg'/>
            <div className='flex justify-between py-2 px-2'> 
         <p className='font-bold'>{item.name}</p>
            <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 py-4 px-2 border-8 font-bold'>{item.price}</p>
            </div>
            <div className='pl-2 py-4 -mt-7'>
                <p className='flex items-center text-indigo-600'>View More <FaLongArrowAltRight className='w-5 ml-2'></FaLongArrowAltRight></p>
            </div>
        </div>
    ))
}
       </div>
        </div>
    );
};

export default Meal;