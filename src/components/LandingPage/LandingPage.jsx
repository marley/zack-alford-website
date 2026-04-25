import React from "react";
import { Element } from "react-scroll";
import { carouselData } from "../../assets/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./overrides.css"; // change this to the file path of your overrides

const LandingPage = (props) => {
  const title = props.siteTitle ? props.siteTitle : props.title;

  const carouselArr = carouselData.map((data, i) => {
    return (
      <div className="h-xl">
        <img
          src={carouselData[i].src}
          alt={carouselData[i].alt}
          className="object-cover"
        />
      </div>
    );
  });

  return (
    <Element name={props.id} className="element">
      <section id={props.id} className="mb-20 bg-black text-white">
        <h1 className="text-left font-display text-7xl md:text-9xl w-1/2 z-10 absolute bottom-12 md:bottom-0 left-0 ml-2">
          {title}
        </h1>
        <Carousel
          className="flex justify-end content-end max-h-full"
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {carouselArr}
        </Carousel>
      </section>
    </Element>
  );
};

export default LandingPage;
