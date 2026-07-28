import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-18";
const token = process.env.SANITY_API_READ_TOKEN || "";

// Validate Sanity Project ID (alphanumeric and dashes only, ignore placeholders)
const isValidProjectId = 
  /^[a-z0-9-]+$/i.test(projectId) && 
  projectId !== "your_project_id" && 
  projectId.length > 0;

interface SanityClientLike {
  fetch: <T>(query: string, params?: any) => Promise<T>;
}

// Safe mock client to prevent build-time crashes when credentials are empty
const mockClient: SanityClientLike = {
  fetch: async <T>(query: string, params?: any): Promise<T> => {
    console.warn("⚠️ Sanity credentials missing or invalid. Next.js is building in fallback mode.");
    return [] as unknown as T;
  }
};

export let client: SanityClientLike = mockClient;
export let previewClient: SanityClientLike = mockClient;

try {
  if (isValidProjectId) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    }) as unknown as SanityClientLike;

    previewClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      perspective: "previewDrafts",
    }) as unknown as SanityClientLike;
  }
} catch (err) {
  console.warn("⚠️ Sanity client initialization failed. Falling back to mock client.", err);
  client = mockClient;
  previewClient = mockClient;
}

// A helper to pick client based on Draft Mode status
export function getSanityClient(preview: boolean = false) {
  return preview ? previewClient : client;
}
export { isValidProjectId };
