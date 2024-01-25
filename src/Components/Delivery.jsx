import React from 'react';
import TopNav from './TopNav';
import Featured from './Featured';

const Delivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-4' src="https://quickeat-react.vercel.app/assets/img/photo-1.png" alt="" />
                <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, labore accusantium. Dolorem maiores, dolor omnis reprehenderit eos quidem nostrum possimus facere beatae, fugit tenetur recusandae temporibus obcaecati vitae ipsum maxime porro soluta magnam voluptatem facilis debitis minus iure aliquid? Quae assumenda temporibus ipsa at tenetur voluptates facere dignissimos, itaque harum iure cumque laborum labore repudiandae, tempora sapiente laudantium perspiciatis quas iste ullam ipsum amet doloribus. Optio ipsa atque earum rerum eaque accusantium? Ipsa voluptate eaque nihil nostrum autem. Assumenda blanditiis distinctio dolorum ducimus tempore beatae at odit rem possimus asperiores dicta consectetur ab perspiciatis voluptatibus nisi recusandae, neque, quisquam adipisci fuga tempora ullam? Id mollitia dolorem, expedita alias totam vitae quas delectus non quae corporis, magnam deserunt unde autem quibusdam hic nobis iure incidunt eveniet eligendi eius fugit vel.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0'>Get Started</button>
            </div>
            </div>
      

        </div>
    );
};

export default Delivery;