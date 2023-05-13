"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-20 md:h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      {/* <img loading="lazy" src="https://links.papareact.com/gi1" alt="" /> */}

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://i.imgur.com/zojJOle.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/AHYJjIA.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/dE0BSK1.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
