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
<<<<<<< HEAD
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
=======
  }, [images]);

  return (
    <div data-testid="main-carousel" className="relative mt-[48px]">
      <div className="transition-opacity duration-500 ease-linear">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            layout="fill"
            alt={`carousel-item${index}`}
            className="absolute top-0 left-0 transition-opacity duration-500"
          />
        ))}
        {/* <Image
          src={images[currentIndex]}
          layout="responsive"
          alt="carousel-item"
          className="opacity-0"
          onLoad={(e) => {
            (e.target as HTMLImageElement).classList.add(`opacity-100`);
          }}
        /> */}
      </div>
>>>>>>> c885071421352ee84779bff13cb468562a07fab3
    </div>
  );
}
