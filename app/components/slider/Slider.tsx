'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {id: 1, image: '/images/slider1.jpeg'},
  {id: 2, image: '/images/slider2.jpeg'},
  {id: 3, image: '/images/slider3.jpeg'},
  {id: 4, image: '/images/slider4.jpeg'},
  {id: 5, image: '/images/slider5.jpeg'},
  {id: 6, image: '/images/slider6.jpeg'},
  {id: 7, image: '/images/slider7.jpeg'},
]

export function Slider() {
  const [sliderPreview, setSliderPreview] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSliderPreview(1)
      } else {
        setSliderPreview(3)
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='container'>

    <Swiper
      slidesPerView={sliderPreview}
      pagination={{ clickable: true }}
      navigation
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Image 
            className='w-[300] h-[300] flex items-center justify-center object-cover mt-10'
            src={item.image} 
            alt="slider" 
            width={300}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}