import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
import Carousel from "./ui/carousel/carousel";
// https://www.material-tailwind.com/docs/react/carousel
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}
