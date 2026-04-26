/**
 * Things to hear where Zack is credited — from any artist, label, or platform.
 * The Listen section reads this list; you only need the public URLs.
 *
 * Fields:
 * - id: string | number — stable key
 * - title: string
 * - artist: string
 * - platform: "youtube" | "spotify" | "bandcamp" | "tidal" | "other"
 * - url: string — canonical open link (share URL)
 * - embedId: string (optional) — for YouTube: 11-char video id; for Spotify: id from
 *   the open.spotify.com /track/… or /album/… path; for TIDAL: optional numeric id if the
 *   url does not contain /track|album|playlist/<id> (defaults to track embed)
 * - embedType: "track" | "album" (optional, only for Spotify) — default "track" if embedId
 *   is set; use "album" for album embeds
 * - embedUrl: string (optional) — full iframe src (e.g. Bandcamp or TIDAL embed URL from
 *   the service’s “Share / Embed” code). Shown above the “Open on …” link.
 * - embedHeight: number (optional) — pixel height for embedUrl iframes (default 200)
 *
 * Link-only: set platform and url, omit embed fields. YouTube/Spotify use embedId; other
 * services can use embedUrl from their embed widget, or stay link-only.
 */
export const tracks = [
  // {
  //   id: 1,
  //   title: "Example live clip",
  //   artist: "Artist name",
  //   platform: "youtube",
  //   url: "https://youtu.be/33Ql4L4G0Jw?si=axp65INWvrF8nlEW",
  //   embedId: "33Ql4L4G0Jw"
  // },
  // {
  //   id: 2,
  //   title: "Example session",
  //   artist: "Another artist",
  //   platform: "spotify",
  //   url: "https://open.spotify.com/track/4cOdK2wGLETKBJ3HkAToHM",
  //   embedId: "4cOdK2wGLETKBJ3HkAToHM",
  //   embedType: "track",
  // },
  // {
  //   id: 3,
  //   title: "Record on Bandcamp",
  //   artist: "Band",
  //   platform: "bandcamp",
  //   embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=1272595835/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
  //   url: "https://www.bandcamp.com",
  // },
  // {
  //   id: 4,
  //   title: "Album on Tidal",
  //   artist: "Artist",
  //   platform: "tidal",
  //   url: "https://tidal.com/track/578852/u",
  // },
];
