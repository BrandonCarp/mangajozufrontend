import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
import Carousel from "./ui/carousel/carousel";
import { GenreCarousel } from "./ui/genreCarousel/genreCarousel";
import HomeCarousel from "./ui/carousel/oldCarousel/homeCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="flex-grow">
        <Carousel />
        <GenreCarousel />
      </div>
      <Footer />
    </div>
  );
}
