import Image from "next/image";
import eov from "../images/eov.jpeg";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
{
  /* <CarouselItem  videoId={data.id.videoId} title={data.snippet.title} channelName={channelName}/> */
}
export default function CarouselItem() {
  return (
    <>
      <div className="   rounded  mx-3  ">
        <div className="flex justify-center">
          <div className="my-5 text-center w-[350px]">
            <Image src={eov} height={500} width={500} alt="eov"></Image>

            <div className="py-3">
              <h1>Title</h1>
              {/* <h5 className="text-gray-400 text-sm">{channelName}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
