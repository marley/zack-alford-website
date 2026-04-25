import React from "react";
import { gearData } from "../assets/gear";
import bgImage from "../assets/gear/gear-bg.webp";

const Gear = () => {
  // TODO figure out how to align-items-center this page content!
  const gear = gearData.map((gear) => (
    <div className="transform hover:scale-105">
      <a href={gear.href} target="_blank" rel="noreferrer">
        <img key={gear.id} src={gear.src} alt={gear.alt} maxWidth="100%" />
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
            maxWidth="30%"
            className="hidden md:block"
          />
        </div>
        <div className="flex flex-col justify-center items-center">{gear}</div>
      </div>
    </div>
  );
};

export default Gear;
