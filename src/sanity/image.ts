import imageUrlBuilder from "@sanity/image-url";
import { client, isValidProjectId } from "./client";

const builder = isValidProjectId ? imageUrlBuilder(client as any) : null;

export function urlFor(source: any) {
  if (!builder || !source) {
    // Return a fallback mock builder returning a default static image path
    return {
      url: () => "/images/hero-illustration.png",
    } as any;
  }
  return builder.image(source);
}
