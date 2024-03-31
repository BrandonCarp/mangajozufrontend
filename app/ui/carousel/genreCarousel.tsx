import { GenreCarouselItem } from "./genreCarouselItem";
import frieren from '../images/frierenCover.jpg'


export const GenreCarousel = () => {
  return (
    <>
      <div className=" space-x-5 overflow-x-auto ml-12 ">
        <h1 className="font-bold text-white text-xl ml-7 pb-5">Popular Picks</h1>
        <div className="flex">
        <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
          <GenreCarouselItem image={frieren} />
   
        </div>
      
          
       
      </div>
    </>
  );
};