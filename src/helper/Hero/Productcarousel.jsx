"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import { Productdata } from "@/src/data/productdata/Productdata";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1340 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1320, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Productcarousel = () => {
  return (
    <div className="w-full mt-6 rounded-lg overflow-hidden shadow-md ">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="px-2"
      >
        {Productdata.map((itme, index) => (
          <div key={index} className="relative h-auto mx-auto">
            <Cards name={itme.name} img={itme.image} des={itme.description}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Productcarousel;
