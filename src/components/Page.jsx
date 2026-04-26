import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Page = (props) => {
  return (
    <Element name={props.id} className="element min-h-screen">
      <motion.section
        id={props.id}
        className="section flex flex-col justify-center items-center p-5"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className={`title text-center font-display text-3xl md:text-5xl ${
            props.titleContrast ? "text-red-700" : "text-gray-100"
          }`}
        >
          {props.title}
        </h1>
        <div className="p-10 h-full w-full">{props.children}</div>
      </motion.section>
    </Element>
  );
};

export default Page;
