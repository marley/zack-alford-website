import React, { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import albumsData from "../assets/discography/albumsData.json";
import FilledButton from "./buttons/FilledButton";

const coverByFileName = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/img/album_covers/*.{webp,png,jpeg,jpg,svg}", {
      eager: true,
      import: "default",
    })
  ).map(([path, mod]) => [path.split("/").pop(), mod])
);

const Discography = () => {
  const { t } = useTranslation();
  const increment = 8;
  const [maxAlbums, setMaxAlbums] = useState(increment);
  const albums = albumsData.map((album) => {
    const src = coverByFileName[album.image];
    const alt = `Album cover for ${album.title} by ${album.artist}`;
    const img = (
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
        loading="lazy"
        decoding="async"
      />
    );
    if (album.url) {
      return (
        <a
          key={album.id}
          href={album.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {img}
        </a>
      );
    }
    return <Fragment key={album.id}>{img}</Fragment>;
  });

  const handleClickButton = () => {
    if (maxAlbums < albums.length) {
      setMaxAlbums(maxAlbums + increment);
    }
  };

  const buttonCopy = t("more");

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {albums.slice(0, maxAlbums)}
      </div>
      <div className="flex justify-center mt-4 font-display">
        {maxAlbums < albums.length && (
          <FilledButton
            onClick={handleClickButton}
            disabled={maxAlbums >= albums.length}
          >
            {buttonCopy}
          </FilledButton>
        )}
      </div>
    </div>
  );
};

export default Discography;
