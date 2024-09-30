"use client";

import { useState, useEffect } from "react";
import eov from "../images/eov.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import CarouselItem from "./CarouselItem";
import Image from "next/image";


export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [eov, img1, img2];
  const imageUrls = ['eov.jpeg', 'img1.jpeg', '.img2.jpeg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);


  return (
    <div data-testid="main-carousel" className="relative  mt-[48px] ">
     
     {/* <CarouselItem image={images[currentIndex]} /> */}
     <Image alt="backgroundCarousel"  src={images[currentIndex]} className="w-full h-[80%]" width={500} height={500}  />
  
    </div>
  );
}
 