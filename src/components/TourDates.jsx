import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { manualTourDates } from "../data/tourDates";

function formatShowDate(isoDay) {
  if (!isoDay) return "";
  const d = new Date(`${isoDay}T12:00:00`);
  if (Number.isNaN(d.getTime())) return isoDay;
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const TourDates = () => {
  const { t } = useTranslation();
  const events = useMemo(
    () => [...manualTourDates].sort((a, b) => a.date.localeCompare(b.date)),
    []
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {events.length === 0 ? (
        <p className="text-gray-400 text-center md:text-left">{t("tour-none")}</p>
      ) : (
        <ul className="space-y-4" role="list">
          {events.map((show) => (
            <li
              key={show.id}
              className="border-l-4 border-green-400 pl-4 py-1 bg-white/5 rounded-r"
            >
              <p className="font-display text-green-400">
                {formatShowDate(show.date)}
              </p>
              {show.artist ? (
                <p className="text-gray-100 text-lg font-medium mt-1">
                  {show.artistUrl ? (
                    <a
                      href={show.artistUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-400 hover:underline"
                    >
                      {show.artist}
                    </a>
                  ) : (
                    show.artist
                  )}
                </p>
              ) : null}
              <p className="text-gray-200 text-lg mt-1">
                {[show.venue, [show.city, show.region].filter(Boolean).join(", ")]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              {show.country ? (
                <p className="text-gray-500 text-sm">{show.country}</p>
              ) : null}
              {show.ticketsUrl ? (
                <a
                  href={show.ticketsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-display text-sm text-green-400 hover:underline"
                >
                  {t("tour-tickets")}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TourDates;
