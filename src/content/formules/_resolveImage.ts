import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image.js";
import { CollectionEntry } from "astro:content";

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/content/formules/_images/*.{png,jpg,jpeg,webp}"
);

export async function resolveImage(entry: CollectionEntry<"formules">) {
  if (!entry.data.image) {
    return undefined;
  }

  if (!(entry.data.image.src in allImages)) {
    throw new Error(
      `[formules] Image for "${entry.data.name}" not found! Provided: "${entry.data.image.src}", is there a typo?`
    );
  }

  const { default: image } = await allImages[entry.data.image.src]();

  return image;
}
