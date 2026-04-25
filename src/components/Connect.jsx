import React from "react";
import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";
import bgImage from "../assets/connect/connect-bg_joshuamodlinger.webp";

const style =
  "p-5 md:px-10 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const ButtonsOverlay = () => {
  return (
    <div id="social-buttons" className="absolute top-1/2 left-1/2 bg-blue">
      <div className="flex md:flex-col">
        <a
          href={import.meta.env.VITE_INSTA}
          target="_blank"
          rel="noreferrer"
          className="m-10"
        >
          <div className={style}>
            <InstagramOutlined alt="instagram" />
          </div>
        </a>
        <a
          href={import.meta.env.VITE_FB}
          target="_blank"
          rel="noreferrer"
          className="m-10"
        >
          <div className={style}>
            <FacebookFilled alt="facebook" />
          </div>
        </a>
      </div>
      <style>{`
      #social-buttons {
        transform: translate(-50%, -50%);
      }
    `}</style>
    </div>
  );
};

const Connect = (props) => {
  return (
    <div className="relative">
      <div data-testid="gear-photo" className="static">
        <img
          src={bgImage}
          alt="Zack playing drums in dim, red lighting."
          maxWidth="30%"
          className="hidden md:block"
        />
      </div>
      <ButtonsOverlay />
    </div>
  );
};

export default Connect;
