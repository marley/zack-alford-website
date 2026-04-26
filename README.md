# About

This is the code for Zack Alford's professional website.

# To Run

1. Copy `.env.example` to `.env` and set `VITE_*` values (social links and optional email parts). Vite only loads variables prefixed with `VITE_` (replacing the old `REACT_APP_*` names from Create React App).
2. `npm run start` or `npm run dev` (Vite dev server).
3. For a production build locally: `npm run build` then `npm run preview`.
4. To deploy: `npm run deploy` (publishes the `build/` output to the `gh-pages` branch; `predeploy` runs the build and copies `CNAME` into `build/`).

## Current content (tour, news, listen)

- **Tour dates** — edit [`src/data/tourDates.js`](src/data/tourDates.js) (`manualTourDates`): each show has an `artist` and optional `artistUrl` (e.g. official site or Bandsintown for that act), plus date, venue, and optional ticket link.
- **News** — edit [`src/data/news.js`](src/data/news.js).
- **Listen** — set `VITE_SPOTIFY_ARTIST_ID` and `VITE_YOUTUBE_VIDEO_ID` for embeds, or at least the Spotify/YouTube **profile** URLs in `.env` for text links.
- **Copy** (bio, hero, labels) is in [`src/i18n.js`](src/i18n.js) under `translation` → `en`.

# To-Do

- [x] Create image carousel
- [x] Create "view all" button for discography page
- [x] Fix page heading getting cut off on page scroll
- [x] Fix menu bar not reaching all the way across the page
- [x] Make Gear page mobile-friendly
- [x] Create image for Bio page
- [x] Host gallery photos

# Notes

## Helpful Links

- [Internationalization](https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb)
- [Scrolling main that doesn't get hidden under navbar](https://discuss.codecademy.com/t/content-is-scrolling-over-header/291674/3)
- [Smooth scrolling for react](https://github.com/fisshy/react-scroll)
- [Image carousel](http://css3.bradshawenterprises.com/cfimg/)
- [spam resistant contact info](https://dev.to/hkievet/react-protecting-an-email-address-3cp0)
- [Decided against - make buttons shake](https://www.w3schools.com/howto/howto_css_shake_image.asp)
- [Check screen size using javascript](https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35)
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [Simple Hamburger Menu Using React and Tailwind](https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua)
- [Configuring a website domain while hosting with github pages](https://stackoverflow.com/questions/49571103/reactjs-app-published-to-github-pages-with-custom-domain)
- [Using WebP Images](https://css-tricks.com/using-webp-images/)
