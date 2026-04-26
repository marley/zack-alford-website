import React from "react";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation();
  const text = [];
  let counter = 0;
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 1) {
      text.push(<br key={`br-${i}`} />);
    } else {
      const paraIndex = counter + 1;
      text.push(
        <li key={`biography-para-${paraIndex}`} className="mt-3 mb-3 ml-6">
          <div
            className="absolute -left-2 mt-6 rounded-full border-4 bg-white"
            aria-hidden
          />
          <h2 className="text-red-600 font-display">
            {t(`biography-para-${paraIndex}.title`)}
          </h2>{" "}
          <p className="sm:text-base md:text-lg text-gray-300">
            {t(`biography-para-${paraIndex}.text`)}
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
