import Image from "next/image";
import { StaticImageData } from "next/image";

interface carouselInterface {
  image: StaticImageData;
}

export const GenreCarouselItem = ({ image }: carouselInterface) => {
  return (
    <>
      <div className="   rounded  mx-3 ">
        <div className="flex justify-center">
          <div className=" text-center w-[300px]">
            <Image
              src={image}
              layout="responsive"
              // objectFit="fit"
              alt="carousel-item"
              // className="w-full h-full"
            />

            <div className="">
              <h1>Hi</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
