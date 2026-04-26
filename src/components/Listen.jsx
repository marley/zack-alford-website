import React from "react";
import { useTranslation } from "react-i18next";
import { tracks } from "../data/tracks";

function platformLabel(t, platform) {
  if (platform === "youtube") return t("listen-platform-youtube");
  if (platform === "spotify") return t("listen-platform-spotify");
  if (platform === "bandcamp") return t("listen-platform-bandcamp");
  if (platform === "tidal") return t("listen-platform-tidal");
  if (platform === "other") return t("listen-platform-other");
  return t("listen-platform-unknown");
}

function spotifyEmbedSrc(track) {
  const type = track.embedType === "album" ? "album" : "track";
  return `https://open.spotify.com/embed/${type}/${track.embedId}?utm_source=generator&theme=0`;
}

/** TIDAL public links include /track|album|playlist/<numeric id> — map to embed.tidal.com */
function getTidalEmbedUrl(track) {
  if (track.platform !== "tidal") return null;
  const m = String(track.url || "").match(/\/(track|album|playlist)\/(\d+)/i);
  if (m) {
    const seg = { track: "tracks", album: "albums", playlist: "playlists" }[m[1].toLowerCase()];
    if (seg) return `https://embed.tidal.com/${seg}/${m[2]}`;
  }
  if (track.embedId) {
    return `https://embed.tidal.com/tracks/${track.embedId}`;
  }
  return null;
}

function renderTrackEmbed(track, heading) {
  const tidalSrc = getTidalEmbedUrl(track);
  if (track.embedUrl) {
    return (
      <iframe
        title={heading}
        className="w-full rounded-lg border-0"
        style={{ minHeight: track.embedHeight ?? 200 }}
        height={track.embedHeight}
        src={track.embedUrl}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }
  if (track.platform === "youtube" && track.embedId) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          title={heading}
          className="absolute left-0 top-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${track.embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  if (track.platform === "spotify" && track.embedId) {
    return (
      <iframe
        title={heading}
        style={{ borderRadius: 12, width: "100%" }}
        height={track.embedType === "album" ? 380 : 352}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        src={spotifyEmbedSrc(track)}
      />
    );
  }
  if (tidalSrc) {
    return (
      <iframe
        title={heading}
        className="w-full max-w-full rounded-lg border-0"
        style={{ minHeight: track.embedHeight ?? 166 }}
        height={track.embedHeight ?? 166}
        src={tidalSrc}
        allow="encrypted-media; clipboard-write"
        loading="lazy"
      />
    );
  }
  return null;
}

const Listen = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-10">
      {tracks.map((track) => {
        const label = platformLabel(t, track.platform);
        const heading = [track.artist, track.title].filter(Boolean).join(" — ");
        const embed = renderTrackEmbed(track, heading);
        const hasEmbed = Boolean(embed);
        const openOnText = hasEmbed
          ? t("listen-open-on-site", { site: label })
          : track.platform === "other"
            ? t("listen-open-generic")
            : t("listen-open", { label });

        return (
          <div
            key={track.id}
            className="border-l-4 border-red-600/80 pl-4 py-2 bg-white/5 rounded-r"
          >
            <p className="text-xs text-gray-500 font-display tracking-wide mb-1">
              {label}
            </p>
            <h2 className="font-display text-lg text-gray-100 mb-1">{track.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{track.artist}</p>

            <div className="space-y-3">
              {embed}
              <a
                href={track.url}
                className={`inline-block text-green-400 font-display hover:underline${
                  hasEmbed ? " text-sm" : ""
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {openOnText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listen;
