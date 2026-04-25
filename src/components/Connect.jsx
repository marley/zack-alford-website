import React from "react";
import { useTranslation } from "react-i18next";
import {
  CustomerServiceOutlined,
  FacebookFilled,
  InstagramOutlined,
  LinkOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import bgImage from "../assets/connect/connect-bg_joshuamodlinger.webp";

const chip =
  "p-4 md:p-5 text-black bg-green-400 rounded flex items-center justify-center gap-2 transform hover:scale-105 min-w-[3rem]";

const socialLinks = (t) => {
  return [
    {
      href: import.meta.env.VITE_INSTA,
      label: t("connect-instagram"),
      Icon: InstagramOutlined,
    },
    {
      href: import.meta.env.VITE_FB,
      label: t("connect-facebook"),
      Icon: FacebookFilled,
    },
    {
      href: import.meta.env.VITE_YOUTUBE_CHANNEL_URL,
      label: t("connect-youtube"),
      Icon: PlayCircleOutlined,
    },
    {
      href: import.meta.env.VITE_SPOTIFY_ARTIST_URL,
      label: t("connect-spotify"),
      Icon: CustomerServiceOutlined,
    },
    {
      href: import.meta.env.VITE_BANDSINTOWN_ARTIST_URL,
      label: t("connect-bandsintown"),
      Icon: LinkOutlined,
    },
    {
      href: import.meta.env.VITE_TIKTOK_URL,
      label: t("connect-tiktok"),
      Icon: LinkOutlined,
    },
    {
      href: import.meta.env.VITE_X_URL,
      label: t("connect-x"),
      Icon: LinkOutlined,
    },
  ];
};

const Connect = () => {
  const { t } = useTranslation();
  const links = socialLinks(t).filter((x) => x.href);

  return (
    <div className="relative w-full">
      <div data-testid="connect-photo" className="static flex justify-center md:justify-start">
        <img
          src={bgImage}
          alt="Zack playing drums in dim, red lighting."
          className="hidden md:block max-w-[30%] w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="md:absolute md:top-1/2 md:left-1/2 w-full max-w-2xl md:max-w-none md:w-auto md:-translate-x-1/2 md:-translate-y-1/2">
        {links.length === 0 ? (
          <p className="text-white/80 text-center py-4">{t("connect-empty")}</p>
        ) : (
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 justify-items-stretch p-0 list-none m-0"
            role="list"
          >
            {links.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="block h-full"
                >
                  <div className={chip}>
                    <Icon className="text-xl" aria-hidden />
                    <span className="font-display text-sm uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Connect;
