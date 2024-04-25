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
<<<<<<< HEAD
        "absolute top-0 left-0 w-full transition-opacity duration-1000  ",
=======
        "top-0 left-0 w-full transition-opacity duration-1000",
>>>>>>> ccc81765497d8b84798f85e4571c5d7882fc0eb4
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
        className="object-cover "
      />
    </div>
  );
}
