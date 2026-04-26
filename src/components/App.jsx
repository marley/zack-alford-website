import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "./MenuBar";
import LandingPage from "./LandingPage/LandingPage";
import Page from "./Page";
import Biography from "./Biography";
import TourDates from "./TourDates";
import Listen from "./Listen";
// import News from "./News";
import Discography from "./Discography";
import Gallery from "./Gallery";
import Gear from "./Gear";
import Connect from "./Connect";
import { tracks } from "../data/tracks";
import { tourBannerImage } from "../data/tourBackground";

const App = () => {
  const { t } = useTranslation();
  const pages = [
    "main",
    "tour",
    "bio",
    "discography",
    "gallery",
    // "news",
    "gear",
    "connect",
  ];
  if (tracks.length > 0) {
    pages.splice(2, 0, "listen")
  }

  return (
    <div className="App px-4 bg-black text-gray-200">
      <MenuBar pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll"
      >
        <LandingPage id="main" siteTitle="Zachary Alford" />
        <Page
          id="tour"
          title={t("tour")}
          shrinkToContent
          banner
          bannerImage={tourBannerImage}
        >
          <TourDates />
        </Page>
        { tracks.length > 0 &&
          <Page id="listen" title={t("listen")}>
            <Listen />
          </Page>
        }
        <Page id="bio" title={t("bio")}>
          <Biography />
        </Page>
        <Page id="discography" title={t("discography")}>
          <Discography />
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <Gallery />
        </Page>
        {/* <Page id="news" title={t("news")}>
          <News />
        </Page> */}
        <Page id="gear" title={t("gear")} titleContrast={true}>
          <Gear />
        </Page>
        <Page id="connect" title={t("connect")}>
          <Connect />
        </Page>
        <div className="footer font-display text-gray-600">
          <p>
            {t("zack-alford-copyright", {
              year: new Date().getFullYear(),
            })}
          </p>
          <small>{t("site-by")}</small>
          <a
            href="https://github.com/marley"
            className="hover:underline text-gray-500 hover:text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <small>Marley Alford</small>
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
