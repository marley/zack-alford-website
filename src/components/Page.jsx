import React from "react";
import { Element } from "react-scroll";

const Page = (props) => {
  // TODO Add a View All button to see all albums
  return (
    <Element name={props.id} className="element min-h-screen">
      <section
        id={props.id}
        className="section flex flex-col justify-center items-center p-5"
      >
        <h1
          className={`title text-center ${
            props.titleContrast ? "text-red-700" : "text-white"
          } font-display text-3xl md:text-5xl`}
        >
          {props.title}
        </h1>
        <div className="p-10 h-full w-full">{props.children}</div>
      </section>
    </Element>
  );
};

export default Page;
