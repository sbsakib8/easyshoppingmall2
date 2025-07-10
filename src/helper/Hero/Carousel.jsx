"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const slides = [
  {
    title: "Explore New Horizons",
    description: "Discover breathtaking places and incredible adventures.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Urban Lifestyle",
    description: "Feel the vibe of vibrant cities across the globe.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Nature & Relaxation",
    description: "Find your peace in natures embrace.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Nature & Relaxation",
    description: "Find your peace in natures embrace.",
    image:
      "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
  },
  {
    title: "Nature & Relaxation",
    description: "Find your peace in natures embrace.",
    image:
      "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
  },
];

const Carousels = () => {
  return (
    <div className="w-full mt-6 rounded-lg overflow-hidden shadow-lg">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="px-2"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] lg:w-[98%] w-full mx-auto">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
