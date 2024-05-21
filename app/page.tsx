import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
import Carousel from "./ui/carousel/carousel";
import { GenreCarousel } from "./ui/carousel/genreCarousel";

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <div className="relative">
        <Carousel />
        <GenreCarousel />
      </div>

      <Footer />
    </div>
 
  );
}
