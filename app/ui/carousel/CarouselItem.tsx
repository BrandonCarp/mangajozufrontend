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
        <div className=" w-full">
          <Image alt="backgroundCarousel"  src={image} className="w-full" width={500} height={500}  />
        </div>
<div>
  <h1 className="max-w-screen-lg m-auto  py-5 px-5 my-10 text-center text-2xl rounded-2xl bg-red text-white">Hey daodajdajkda</h1>
</div>
      </div>
      </main>
  );
}