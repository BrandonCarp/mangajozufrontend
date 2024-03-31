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
    >  {/* <div className="absolute mt-[30%] bg-white w-[30rem]">
        <p className="text-sm">Developers Picks | Genres here</p>
        <p className="text-sm">ABOUT INFO HERE :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquam eligendi animi odit quae nihil maxime nisi, sapiente molestias consequuntur facilis repudiandae corporis ducimus odio autem ab enim porro iusto veniam nulla adipisci! Omnis ut quidem ex maiores assumenda quibusdam reprehenderit libero eveniet iusto, nulla ducimus error odit necessitatibus aut?</p>
      </div>
     */}
      <Image
        src={image}
        layout="responsive"
        // objectFit="fit"
        alt="carousel-item"
        className="w-full h-full"
      />
    </div>
  );
}
