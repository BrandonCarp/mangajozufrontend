"use client";

import { useState, useEffect } from "react";
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
  }, [images]);

  return (
    <div
      data-testid="main-carousel"
      className="relative " // Ensure full width and fixed height
    >
      <Image
        alt="backgroundCarousel"
        src={images[currentIndex]}
        className="   " // Full width on small screens, auto on larger
        layout="" // Ensure the image takes the full space of the container
      />
    </div>
  );
}
