import React, { useState } from "react";
import { Link } from "react-scroll";
import GalleryCollection from "./GalleryCollection";
import { galleryData } from "../assets/gallery";

const Gallery = () => {
  const [openCollection, setOpenCollection] = useState(null);

  const largeScreenGalleryStyling =
    "lg:hover:bg-green-300 lg:hover:bg-opacity-90 lg:hover:text-black";
  const mobileTitleStyling = "bg-green-300 bg-opacity-90";
  const largeScreenTitleStyling = "lg:bg-transparent";

  const galleries = galleryData.map((gallery) => (
    <div key={gallery.id} className="relative">
      <Link
        activeClass="active"
        to="gallery"
        onClick={() => setOpenCollection(gallery)}
        spy={true}
        smooth={true}
        duration={250}
        containerId="main-container"
      >
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-between ${largeScreenGalleryStyling} duration-300 cursor-pointer`}
        >
          <div>
            <h1
              className={`tracking-wider ${
                gallery.titleSize ?? "text-lg"
              } md:text-3xl font-black -mt-2 ${mobileTitleStyling} ${largeScreenTitleStyling}`}
            >
              {gallery.title.toUpperCase()}
            </h1>
            <p
              className={`mx-auto tracking-wider ${mobileTitleStyling} ${largeScreenTitleStyling}`}
            >
              {gallery.year}
            </p>
          </div>
          <div className="p-6"></div>
        </div>
        <div className="relative">
          <div className="h-48 flex flex-wrap content-center w-full">
            <img
              src={gallery.src}
              alt={`${gallery.title} gallery`}
              className="w-full h-full object-cover"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Link>
    </div>
  ));

  if (openCollection) {
    return (
      <div className="flex justify-center">
        <GalleryCollection
          gallery={openCollection}
          handleCloseClick={() => setOpenCollection(null)}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{galleries}</div>
  );
};

export default Gallery;
