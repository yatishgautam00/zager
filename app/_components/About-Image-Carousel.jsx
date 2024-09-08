"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/aboutimg4.png",
  "/aboutimg3.png",
  "/aboutimg2.png",
  "/aboutimg1.png",
];

function AboutImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-[1_0_100%]">
            <div className="p-0">
              <div className="flex aspect-square items-center justify-center w-full h-96">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default AboutImageCarousel;
