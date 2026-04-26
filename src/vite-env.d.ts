/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTA: string;
  readonly VITE_FB: string;
  readonly VITE_EMAIL_FIRST: string;
  readonly VITE_EMAIL_LAST: string;
  readonly VITE_BANDSINTOWN_APP_ID: string;
  readonly VITE_BANDSINTOWN_ARTIST_NAME: string;
  readonly VITE_BANDSINTOWN_ARTIST_URL: string;
  readonly VITE_SPOTIFY_ARTIST_URL: string;
  readonly VITE_YOUTUBE_CHANNEL_URL: string;
  readonly VITE_TIKTOK_URL: string;
  readonly VITE_X_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
