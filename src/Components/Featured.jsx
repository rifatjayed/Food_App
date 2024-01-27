import React, { useState } from 'react';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { RxDotFilled } from "react-icons/rx";


const Featured = () => {

    const sliders = [
        {
            url: 'https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.ccf464248c38e8f0cca0.jpg'
        },
        {
            url: 'https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.a3a5f4d03926cf53a16d.jpg'
        },
        {
            url: 'https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.3bf12b6c16e4ffe32cec.jpg',
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 ' style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronLeft onClick={prevSlider}></BsChevronLeft>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronRight onClick={nextSlider}></BsChevronRight>
            </div>

            <div className='flex top-4 justify-center py-2'>

                {
                    sliders.map((sliderItems, slideIndex) => {
                      return  <div key={slideIndex} onClick={()=> moveToNextSlide(slideIndex)} className='text-2xl cursor-pointer'><RxDotFilled></RxDotFilled> </div>
                      

                    })
                }
            </div>

        </div>
    );
};

export default Featured;