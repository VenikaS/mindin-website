/**
 * Calculates reading time in minutes for a given Portable Text body.
 * Assumes a reading speed of 200 words per minute.
 */
export function calculateReadingTime(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) {
    return "1 min read";
  }

  let wordCount = 0;

  blocks.forEach((block) => {
    if (block._type === "block" && block.children && Array.isArray(block.children)) {
      block.children.forEach((child: any) => {
        if (child.text && typeof child.text === "string") {
          const words = child.text.trim().split(/\s+/).filter(Boolean);
          wordCount += words.length;
        }
      });
    }
  });

  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}
