import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { manualTourDates } from "../data/tourDates";

function normalizeBitEvent(e) {
  const ticketsUrl =
    (e.offers && e.offers[0] && e.offers[0].url) || e.url || "";
  const dt = e.datetime || e.starts_at || "";
  const dateStr = dt ? String(dt).slice(0, 10) : "";
  return {
    id: String(e.id ?? e.url ?? `${dateStr}-${e.venue?.name}`),
    date: dateStr,
    venue: e.venue?.name || "",
    city: e.venue?.city || "",
    region: e.venue?.region || "",
    country: e.venue?.country || "",
    ticketsUrl,
  };
}

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
  const [events, setEvents] = useState(manualTourDates);
  const [loadState, setLoadState] = useState("idle");

  const bitPage = import.meta.env.VITE_BANDSINTOWN_ARTIST_URL;

  useEffect(() => {
    let cancelled = false;
    const appId = import.meta.env.VITE_BANDSINTOWN_APP_ID;
    const artist = import.meta.env.VITE_BANDSINTOWN_ARTIST_NAME;

    if (!appId || !artist) {
      setEvents(manualTourDates);
      return () => {
        cancelled = true;
      };
    }

    setLoadState("loading");
    const u = new URL(
      `https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}/events`
    );
    u.searchParams.set("app_id", appId);
    u.searchParams.set("date", "upcoming");

    fetch(u.toString())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!Array.isArray(data) || data.length === 0) {
          setEvents(manualTourDates.length ? manualTourDates : []);
          setLoadState("ok");
          return;
        }
        const mapped = data
          .map(normalizeBitEvent)
          .filter((e) => e.date)
          .sort((a, b) => a.date.localeCompare(b.date));
        setEvents(mapped.length ? mapped : manualTourDates);
        setLoadState("ok");
      })
      .catch(() => {
        if (cancelled) return;
        setEvents(manualTourDates);
        setLoadState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {loadState === "loading" && (
        <p className="text-green-400 font-display text-sm mb-4">{t("loading")}</p>
      )}
      {loadState === "error" && (
        <p className="text-red-400 text-sm mb-4">{t("tour-api-unavailable")}</p>
      )}
      {events.length === 0 ? (
        <div className="text-center md:text-left">
          <p className="text-gray-400 mb-4">{t("tour-none")}</p>
          {bitPage ? (
            <a
              href={bitPage}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-display text-green-400 hover:underline"
            >
              {t("tour-follow-bit")}
            </a>
          ) : null}
        </div>
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
              <p className="text-gray-200 text-lg">
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
      {bitPage && events.length > 0 ? (
        <p className="mt-8 text-center md:text-left">
          <a
            href={bitPage}
            target="_blank"
            rel="noreferrer"
            className="font-display text-green-400 hover:underline"
          >
            {t("tour-follow-bit")}
          </a>
        </p>
      ) : null}
    </div>
  );
};

export default TourDates;
