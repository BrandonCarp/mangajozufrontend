"use client";

import { useState, useEffect } from "react";
import CarouselItem from "./carouselItem";
import eov from "../images/eov.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [eov, img1, img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div
      data-testid="main-carousel"
      className="relative w-screen h-screen overflow-hidden"
    >
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          image={image}
          isActive={index === currentIndex}
        />
      ))}
    </div>
  );
}
