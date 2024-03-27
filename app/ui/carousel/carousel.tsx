import CarouselItem from "./carouselItem";

import {} from "./carouselItem";

export default function Carousel() {
  return (
    <>
      <div className="carousel p-4 flex items-center justify-start space-x-5 overflow-x-auto">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
    </>
  );
}
