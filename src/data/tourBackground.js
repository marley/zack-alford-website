/**
 * Source image for the Tour Dates banner background.
 *
 * The image itself is NOT shown. Instead, the Tour banner samples a small
 * 3x3 grid of average colors from this image and renders them as soft,
 * blurred color blobs over a dark base — so the banner picks up the
 * "feel" of the image without showing any details.
 *
 * To use a DIFFERENT source image:
 *   1) Drop your image into `src/assets/img/` (or any subfolder there).
 *      Common formats supported: .webp, .jpg, .png.
 *   2) Replace the import below with your image, e.g.:
 *
 *        import customBg from "../assets/img/my-tour-banner.webp";
 *        export const tourBannerImage = customBg;
 *
 * To revert to the default (the first/featured carousel image), keep the
 * code below as-is.
 */
import { carouselData } from "../assets/carousel";

export const tourBannerImage = carouselData[0]?.src;
