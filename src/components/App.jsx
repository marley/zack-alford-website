import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "./MenuBar";
import LandingPage from "./LandingPage/LandingPage";
import Page from "./Page";
import Biography from "./Biography";
import Discography from "./Discography";
import Gallery from "./Gallery";
import Gear from "./Gear";
import Connect from "./Connect";

const App = () => {
  const { t } = useTranslation();
  const pages = ["main", "bio", "discography", "gallery", "gear", "connect"];

  return (
    <div className="App px-4 bg-black text-white">
      <MenuBar pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll"
      >
        <LandingPage id="main" siteTitle="Zachary Alford" />
        <Page id="bio" title={t("bio")}>
          <Biography />
        </Page>
        <Page id="discography" title={t("discography")}>
          <Discography />
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <Gallery />
        </Page>
        <Page id="gear" title={t("gear")} titleContrast={true}>
          <Gear />
        </Page>
        <Page id="connect" title={t("connect")}>
          <Connect />
        </Page>
        <div className="footer font-display">
          <p>{t("zack-alford-copyright")}</p>
          <small>{t("site-by")}</small>
          <a
            href="https://github.com/ma8642"
            className="hover:underline"
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
