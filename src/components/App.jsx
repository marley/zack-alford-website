import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "./MenuBar";
import LandingPage from "./LandingPage/LandingPage";
import Page from "./Page";
import Biography from "./Biography";
import TourDates from "./TourDates";
import Listen from "./Listen";
import News from "./News";
import Discography from "./Discography";
import Gallery from "./Gallery";
import Gear from "./Gear";
import Connect from "./Connect";

const App = () => {
  const { t } = useTranslation();
  const pages = [
    "main",
    "tour",
    "listen",
    "bio",
    "discography",
    "gallery",
    "news",
    "gear",
    "connect",
  ];

  return (
    <div className="App px-4 bg-black text-gray-200">
      <MenuBar pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll"
      >
        <LandingPage id="main" siteTitle="Zachary Alford" />
        <Page id="tour" title={t("tour")}>
          <TourDates />
        </Page>
        <Page id="listen" title={t("listen")}>
          <Listen />
        </Page>
        <Page id="bio" title={t("bio")}>
          <Biography />
        </Page>
        <Page id="discography" title={t("discography")}>
          <Discography />
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <Gallery />
        </Page>
        <Page id="news" title={t("news")}>
          <News />
        </Page>
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
