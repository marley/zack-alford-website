import React from "react";
import { gearData } from "../assets/gear";
import bgImage from "../assets/gear/gear-bg.webp";

const Gear = () => {
  // TODO figure out how to align-items-center this page content!
  const gear = gearData.map((item) => (
    <div key={item.id} className="transform hover:scale-105">
      <a href={item.href} target="_blank" rel="noreferrer">
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  ));

  return (
    <div className="h-full flex items-center">
      <div className="flex flex-col items-center lg:grid lg:grid-cols-gear lg:gap-x-4">
        <div data-testid="gear-photo">
          <img
            src={bgImage}
            alt="Zack playing drums in dim, red lighting."
            className="hidden md:block max-w-[30%] w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col justify-center items-center">{gear}</div>
      </div>
    </div>
  );
};

export default Gear;
