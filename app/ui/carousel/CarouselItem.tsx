import Image from "next/image";
import clsx from "clsx";

import { StaticImageData } from "next/image";

interface CarouselItemProps {
  image: StaticImageData;
}

export default function CarouselItem({ image }: CarouselItemProps) {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="">
          <Image alt="backgroundCarousel"  src={image} className="" width={500} height={500}  />
        </div>
<div>
  <h1 className=" m-auto   text-center text-2xl ">Hey daodajdajkda</h1>
</div>
      </div>
      </main>
  );
}