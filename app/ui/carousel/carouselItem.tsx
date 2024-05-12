import Image from "next/image";
import clsx from "clsx";

import { StaticImageData } from "next/image";

interface CarouselItemProps {
  image: StaticImageData;
}

export default function CarouselItem({ image }: CarouselItemProps) {
  return (
    <div>
      <Image src={image} layout="responsive" alt="carousel-item" className="" width={500} height={500}/>
    </div>
  );
}