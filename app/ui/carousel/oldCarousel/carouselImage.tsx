
"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import eov from "../images/eov.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";

export default function CarouselImage() {
  // Ensure autoplay is configured with delay, loop, and stop on interaction
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay({ delay: 3000 })]);

  const images = [eov, img1, img2];

  return (
    <div className="relative overflow-hidden mt-10 h-[100vh] w-full" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((image, index) => (
          <div key={index} className="embla__slide relative w-full h-full flex-[0_0_100%]">
            <Image
              className="object-cover"
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 100vh"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}