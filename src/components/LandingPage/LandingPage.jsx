import React from "react";
import { useTranslation } from "react-i18next";
import { Element, Link } from "react-scroll";
import { carouselData } from "../../assets/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./overrides.css";

const ctaButtonClass =
  "font-display uppercase text-sm tracking-wide px-4 py-2 rounded border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors";

const LandingPage = (props) => {
  const { t } = useTranslation();
  const title = props.siteTitle ? props.siteTitle : props.title;

  const carouselArr = carouselData.map((data, index) => {
    const isFirst = index === 0;
    return (
      <div key={data.id} className="h-xl">
        <img
          src={data.src}
          alt={data.alt}
          className="w-full h-full object-cover"
          loading={isFirst ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  });

  return (
    <Element name={props.id} className="element">
      <section
        id={props.id}
        className="relative mb-20 bg-black text-white min-h-[50vh]"
      >
        <div className="absolute bottom-0 left-0 z-20 w-full max-w-full pr-2 pb-6 pl-2 md:pb-10 md:pl-3 pointer-events-none">
          <div className="pointer-events-auto max-w-lg">
            <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-8 shadow-2xl">
              <h1 className="text-left font-display text-4xl sm:text-6xl md:text-7xl text-white leading-none mb-3">
                {title}
              </h1>
              <p className="text-white/90 font-body text-sm md:text-base mb-5 max-w-md">
                {t("hero-subtitle")}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  activeClass="active"
                  to="tour"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="main-container"
                  href="#tour"
                  className={ctaButtonClass}
                >
                  {t("cta-tour")}
                </Link>
                <Link
                  activeClass="active"
                  to="listen"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="main-container"
                  href="#listen"
                  className={ctaButtonClass}
                >
                  {t("cta-listen")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          className="flex justify-end content-end max-h-full"
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {carouselArr}
        </Carousel>
      </section>
    </Element>
  );
};

export default LandingPage;
