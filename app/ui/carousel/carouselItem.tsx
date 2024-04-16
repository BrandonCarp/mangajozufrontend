import Image from "next/image";
import clsx from "clsx";
import { StaticImageData } from "next/image";

interface CarouselItemProps {
  image: StaticImageData;
  isActive: boolean;
}

export default function CarouselItem({ image, isActive }: CarouselItemProps) {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full transition-opacity duration-1000  ",
        {
          "opacity-100": isActive,
          "opacity-0": !isActive,
        }
      )}
    >
      <Image
        src={image}
        layout="responsive"
        alt="carousel-item"
        className="object-cover"
      />
    </div>
  );
}
