import React from "react";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation();
  const text = [];
  let counter = 0;
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 1) {
      text.push(<br />);
    } else {
      text.push(
        <li className="mt-3 mb-3 ml-6">
          <div className="absolute -left-2 mt-6 rounded-full border-4 bg-white"></div>
          <h2 className="text-red-600 font-display">
            {t(`biography-para-${counter + 1}.title`)}
          </h2>{" "}
          <p key={i} className="sm:text-base md:text-lg text-white">
            {t(`biography-para-${counter + 1}.text`)}
          </p>
        </li>
      );
      counter += 1;
    }
  }
  return (
    <ol className="relative border-l-8 border-red-700 ml-2 pb-2">{text}</ol>
  );
};

export default Biography;
