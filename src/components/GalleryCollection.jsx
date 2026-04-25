import React, { useState } from "react";
import { Link } from "react-scroll";
import { CloseOutlined } from "@ant-design/icons";
import { collectionsData } from "../assets/gallery";

const GalleryCollection = ({ gallery, handleCloseClick }) => {
  // One big photo
  // a row of small thumbnails underneath. Each one clicked becomes the big one shown.
  const collection = collectionsData[gallery.id];
  const [focusedImage, setFocusedImage] = useState(collection[0]);

  return (
    <div className="collection-container flex flex-col items-center md:w-xl">
      <div className="flex justify-between w-full">
        <div className="gallery-info flex font-display">
          <h2 className="mr-2">{gallery.title.toUpperCase()}</h2>{" "}
          <h3>{gallery.year}</h3>
        </div>
        <CloseOutlined
          className="flex justify-end mb-2 text-xl"
          onClick={handleCloseClick}
        />
      </div>
      <div className="flex flex-col justify-center content-center">
        <div className="focused-image flex justify-center flex-col">
          <img src={focusedImage.src} height="100vh" alt={focusedImage.alt} />
          <div id="description">{focusedImage.desc}</div>
        </div>

        <div className="thumbnail-row grid gap-1 grid-cols-6 grid-rows-1 overflow-x-auto">
          {collection.map((photo, i) => {
            return (
              <div key={i} className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="gallery"
                  onClick={() => setFocusedImage(photo)}
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="main-container"
                >
                  <img
                    key={i}
                    src={photo.src}
                    height="70px"
                    width="70px"
                    alt={photo.alt}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryCollection;
