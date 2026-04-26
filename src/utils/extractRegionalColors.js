/**
 * Sample a small grid of average RGB colors from an image.
 * Used by the Tour banner to render a blurred color wash that
 * mimics the palette of a source image without showing the image itself.
 *
 * Returns a Promise resolving to an array of cells:
 *   [{ r, g, b, x, y }]
 * where x/y are the cell's normalized center (0..1) within the image.
 */
export function extractRegionalColors(src, grid = 3) {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve([]);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";

    img.onload = () => {
      try {
        const sampleSize = Math.max(grid * 16, 48);
        const canvas = document.createElement("canvas");
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          resolve([]);
          return;
        }
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const cellW = Math.floor(sampleSize / grid);
        const cellH = Math.floor(sampleSize / grid);
        const cells = [];

        for (let gy = 0; gy < grid; gy++) {
          for (let gx = 0; gx < grid; gx++) {
            const { data } = ctx.getImageData(
              gx * cellW,
              gy * cellH,
              cellW,
              cellH
            );
            let r = 0;
            let g = 0;
            let b = 0;
            let count = 0;
            for (let i = 0; i < data.length; i += 4) {
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              count++;
            }
            cells.push({
              r: Math.round(r / count),
              g: Math.round(g / count),
              b: Math.round(b / count),
              x: (gx + 0.5) / grid,
              y: (gy + 0.5) / grid,
            });
          }
        }
        resolve(cells);
      } catch (err) {
        reject(err);
      }
    };

    img.onerror = (err) => reject(err);
    img.src = src;
  });
}
