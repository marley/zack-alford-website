/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTA: string;
  readonly VITE_FB: string;
  readonly VITE_EMAIL_FIRST: string;
  readonly VITE_EMAIL_LAST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
