import Image from "next/image";
import { StaticImageData } from "next/image";
import clsx from "clsx";

interface carouselInterface {
  image: StaticImageData;
  isActive: boolean;
}

export default function CarouselItem({ image, isActive }: carouselInterface) {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full h-full transition-opacity duration-1000",
        {
          "opacity-100": isActive === true,
          "opacity-0": isActive === false,
        }
      )}
    >
      <Image
        src={image}
        layout="responsive"
        objectFit="fit"
        alt="carousel-item"
        className="w-full h-full"
      />
    </div>
  );
}
