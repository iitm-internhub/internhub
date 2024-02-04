"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import dommyCarousel from "@/public/images/dommy-carousel.jpg";

interface eventsInterface {
  image: any;
  title: string;
  description: string;
}

const events: Array<eventsInterface> = [
  {
    image: dommyCarousel,
    title: "Some title",
    description: "Some descrtiption",
  },
  {
    image: dommyCarousel,
    title: "Some title",
    description: "Some descrtiption",
  },
  {
    image: dommyCarousel,
    title: "Some title",
    description: "Some descrtiption",
  },
  {
    image: dommyCarousel,
    title: "Some title",
    description: "Some descrtiption",
  },
];

const EventsCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {events?.map((event: eventsInterface, i) => (
          <div className="embla__slide" key={i}>
            <div className="lg:h-[70vh] w-full overflow-hidden">
              <Image
                alt="carousel"
                height={2000}
                width={2000}
                src={event.image}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;
