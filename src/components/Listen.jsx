import React from "react";
import { useTranslation } from "react-i18next";

const Listen = () => {
  const { t } = useTranslation();
  const spotifyId = import.meta.env.VITE_SPOTIFY_ARTIST_ID;
  const youtubeId = import.meta.env.VITE_YOUTUBE_VIDEO_ID;
  const spotifyUrl = import.meta.env.VITE_SPOTIFY_ARTIST_URL;
  const youtubeUrl = import.meta.env.VITE_YOUTUBE_CHANNEL_URL;

  const hasSpotify = Boolean(spotifyId);
  const hasVideo = Boolean(youtubeId);

  if (!hasSpotify && !hasVideo) {
    return (
      <p className="text-white/80 text-center max-w-xl mx-auto">
        {t("listen-config-hint")}{" "}
        {spotifyUrl && (
          <a
            href={spotifyUrl}
            className="text-green-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {t("listen-spotify-link")}
          </a>
        )}
        {spotifyUrl && youtubeUrl ? " · " : null}
        {youtubeUrl && (
          <a
            href={youtubeUrl}
            className="text-green-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {t("listen-youtube-link")}
          </a>
        )}
      </p>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-10">
      {hasSpotify && (
        <div>
          <h2 className="font-display text-xl text-red-600 mb-3">
            {t("listen-spotify-heading")}
          </h2>
          <iframe
            title={t("listen-spotify-heading")}
            style={{ borderRadius: 12, width: "100%" }}
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            src={`https://open.spotify.com/embed/artist/${spotifyId}?utm_source=generator&theme=0`}
          />
        </div>
      )}
      {hasVideo && (
        <div>
          <h2 className="font-display text-xl text-red-600 mb-3">
            {t("listen-video-heading")}
          </h2>
          <div className="relative w-full aspect-video max-h-[50vh]">
            <iframe
              title={t("listen-video-heading")}
              className="absolute inset-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Listen;
