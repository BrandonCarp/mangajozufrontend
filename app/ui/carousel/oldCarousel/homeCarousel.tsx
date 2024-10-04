"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import CarouselImage from "./carouselImage";

export default function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay({ })]);


  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <CarouselImage />
    </div>
  );
}