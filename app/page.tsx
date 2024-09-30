import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
import Carousel from "./ui/carousel/carousel";
// import { GenreCarousel } from "./ui/carousel/genreCarousel";
import HomeCarousel from "./ui/carousel/oldCarousel/homeCarousel";

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      
        {/* <HomeCarousel /> */}
        {/* <GenreCarousel /> */}
   

      <Footer />
    </div>
 
  );
}
