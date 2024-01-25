import React from 'react';
import { topPicks } from '../Data/data';

const TopPicks = () => {
    return (
        <div>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top picks</h1>
       <div className='hidden lg:flex max-w[152px] m-auto py-2 px-2'>

        {
            topPicks.map((items)=>{
                return(
                    <div className='rouonded-3xl relative'>

<div className='absolute w-full h-full bg-black/50 rounded-3xl text-white '>
<p className='px-2'>{items.title}</p>
</div>
<img className='h-[200px] w-full' src={items.img} alt="" />


                    </div>
                )
            })
        }
       </div>
        </div>
    );
};

export default TopPicks;