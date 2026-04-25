import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import albums from "../assets/discography";
import FilledButton from "./buttons/FilledButton";

const Discography = () => {
  const { t } = useTranslation();
  const increment = 8;
  const [maxAlbums, setMaxAlbums] = useState(increment);
  const albumsData = albums.map((album, i) => (
    <img
      key={album.id}
      src={album.src}
      alt={`Album cover for ${album.title} by ${album.artist}`}
      maxWidth="50%"
    />
  ));

  const handleClickButton = () => {
    if (maxAlbums < albumsData.length) {
      setMaxAlbums(maxAlbums + increment);
    }
  };

  const buttonCopy = t("more");

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {albumsData.slice(0, maxAlbums)}
      </div>
      <div className="flex justify-center mt-4 font-display">
        {maxAlbums < albumsData.length && (
          <FilledButton
            onClick={handleClickButton}
            disabled={maxAlbums >= albumsData.length}
          >
            {buttonCopy}
          </FilledButton>
        )}
      </div>
    </div>
  );
};

export default Discography;
