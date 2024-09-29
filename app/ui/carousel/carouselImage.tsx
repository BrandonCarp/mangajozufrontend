import Image from "next/image"
import eov from "../images/eov.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";

const images = [eov, img1, img2];

export default function CarouselImage() {
  return  <div className="flex h-full ">
  {images.map((image, index) => (
    <div key={index} className=" relative w-full h-full flex-[0_0_100%]">
      
      <Image
        className="object-cover object-center"
        src={image}
        alt={`Slide ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 100vw" // Make sure the image fits the screen
        priority // Prioritize loading for performance
      />
    </div>
  ))}
</div>
}