import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
import Carousel from "./ui/carousel/oldCarousel/carousel";
// import { GenreCarousel } from "./ui/carousel/genreCarousel";
import HomeCarousel from "./ui/carousel/homeCarousel";

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <div className="relative">
        <HomeCarousel />
        {/* <GenreCarousel /> */}
      </div>

      <Footer />
    </div>
 
  );
}
