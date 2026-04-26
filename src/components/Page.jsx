import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Element } from "react-scroll";
import { extractRegionalColors } from "../utils/extractRegionalColors";

const GRAIN_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix type='saturate' values='0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)' opacity='0.85'/>
  </svg>`
);
const GRAIN_DATA_URL = `url("data:image/svg+xml;utf8,${GRAIN_SVG}")`;

/**
 * Build an animated swirl gradient from a palette of regional colors.
 *
 * Each color's center is referenced via two CSS custom properties
 * (--gx{i}, --gy{i}) so framer-motion can animate them. Each cell's
 * center traces a slow circular path around its source position, with
 * a per-cell phase offset so the colors don't all move in sync.
 *
 * Returns:
 *   - bgImage:    background-image string referencing the CSS vars
 *   - initialVars: starting values for those vars (object)
 *   - animateVars: keyframe arrays for each var (object)
 *   - times:       framer-motion `times` array matching the keyframes
 */
function buildSwirlGradient(palette, radius = 14, steps = 6) {
  if (!palette.length) return null;

  const bgImage = palette
    .map(
      (c, i) =>
        `radial-gradient(circle at var(--gx${i}) var(--gy${i}), rgba(${c.r}, ${c.g}, ${c.b}, 0.85) 0%, rgba(${c.r}, ${c.g}, ${c.b}, 0) 60%)`
    )
    .join(", ");

  const initialVars = {};
  const animateVars = {};

  palette.forEach((c, i) => {
    const baseX = c.x * 100;
    const baseY = c.y * 100;
    const phase = (i * Math.PI * 2) / palette.length;

    initialVars[`--gx${i}`] = `${baseX.toFixed(1)}%`;
    initialVars[`--gy${i}`] = `${baseY.toFixed(1)}%`;

    const xs = [];
    const ys = [];
    for (let s = 0; s < steps; s++) {
      const t = (s / steps) * Math.PI * 2 + phase;
      xs.push(`${(baseX + Math.cos(t) * radius).toFixed(1)}%`);
      ys.push(`${(baseY + Math.sin(t) * radius).toFixed(1)}%`);
    }
    xs.push(xs[0]);
    ys.push(ys[0]);
    animateVars[`--gx${i}`] = xs;
    animateVars[`--gy${i}`] = ys;
  });

  const times = Array.from({ length: steps + 1 }, (_, i) => i / steps);

  return { bgImage, initialVars, animateVars, times };
}

function averageColor(palette) {
  if (!palette.length) return "rgb(0,0,0)";
  let r = 0;
  let g = 0;
  let b = 0;
  palette.forEach((c) => {
    r += c.r;
    g += c.g;
    b += c.b;
  });
  const n = palette.length;
  return `rgb(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)})`;
}

const Page = (props) => {
  const { shrinkToContent, banner, bannerImage } = props;
  const hasBannerImage = Boolean(banner && bannerImage);
  const [palette, setPalette] = useState([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!hasBannerImage) {
      setPalette([]);
      return undefined;
    }
    let cancelled = false;
    extractRegionalColors(bannerImage, 3)
      .then((cells) => {
        if (!cancelled) setPalette(cells);
      })
      .catch(() => {
        if (!cancelled) setPalette([]);
      });
    return () => {
      cancelled = true;
    };
  }, [hasBannerImage, bannerImage]);

  const baseColor = useMemo(() => averageColor(palette), [palette]);
  const swirl = useMemo(() => buildSwirlGradient(palette), [palette]);

  const elementClass = [
    "element",
    shrinkToContent ? "" : "min-h-screen",
    banner ? "relative -mx-4 my-10 overflow-hidden border-y border-green-400/30" : "",
    banner && !hasBannerImage
      ? "bg-gradient-to-r from-green-900/40 via-black to-green-900/40"
      : "",
    hasBannerImage ? "bg-black" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Element name={props.id} className={elementClass}>
      {hasBannerImage ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ backgroundColor: baseColor }}
        >
          {swirl ? (
            <motion.div
              className="absolute"
              style={{
                inset: "-20%",
                backgroundImage: swirl.bgImage,
                filter: "blur(40px) saturate(1.15)",
                willChange: "background-image",
                ...swirl.initialVars,
              }}
              initial={false}
              animate={prefersReducedMotion ? undefined : swirl.animateVars}
              transition={{
                duration: 22,
                ease: "easeInOut",
                repeat: Infinity,
                times: swirl.times,
              }}
            />
          ) : null}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-80"
            style={{
              backgroundImage: GRAIN_DATA_URL,
              backgroundSize: "240px 240px",
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ) : null}
      <motion.section
        id={props.id}
        className={`section flex flex-col justify-center items-center ${
          banner ? "relative px-5 py-10 md:py-14" : "p-5"
        }`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className={`title text-center font-display text-3xl md:text-5xl ${
            props.titleContrast ? "text-red-700" : "text-gray-100"
          }`}
        >
          {props.title}
        </h1>
        <div
          className={`w-full ${banner ? "pt-6 md:pt-8" : "p-10"} ${
            shrinkToContent ? "h-auto" : "h-full"
          }`}
        >
          {props.children}
        </div>
      </motion.section>
    </Element>
  );
};

export default Page;
