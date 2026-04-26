import React from "react";
import { useTranslation } from "react-i18next";
import { newsItems } from "../data/news";

function formatNewsDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const News = () => {
  const { t } = useTranslation();
  if (!newsItems.length) {
    return <p className="text-gray-500 text-center">{t("news-empty")}</p>;
  }
  return (
    <ul className="w-full max-w-3xl mx-auto space-y-6" role="list">
      {newsItems.map((item) => (
        <li
          key={item.id}
          className="border-b border-red-700/50 pb-6 last:border-0"
        >
          <p className="text-green-400 font-display text-sm mb-1">
            {formatNewsDate(item.date)}
          </p>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-display text-gray-100 hover:text-green-400"
            >
              {item.title} →
            </a>
          ) : (
            <h3 className="text-xl font-display text-gray-100">{item.title}</h3>
          )}
          {item.blurb ? (
            <p className="text-gray-400 mt-2 leading-relaxed">{item.blurb}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default News;
