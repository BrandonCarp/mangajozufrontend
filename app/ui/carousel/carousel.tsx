"use client";

import { useState, useEffect } from "react";
import CarouselItem from "./carouselItem";
import eov from "../images/eov.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import Image from "next/image";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [eov, img1, img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      data-testid="main-carousel"
      className="relative mt-[48px]"
      
    >
      <Image
         src={images[currentIndex]}
         layout="responsive"
        alt="carousel-item"
        className="transition transition-opacity duration-1000 ease-in "
      />
      {/* {images.map((image, index) => (
      className=" mt-12   mb-[15%] w500:mb-[20%] md:mb-[30%] lg:mb-[5%]"
      style={{ height: "50vh", maxWidth: "100%" }}
    >
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          image={image}
          isActive={index === currentIndex}
        />
      ))} */}
    </div>
  );
}
