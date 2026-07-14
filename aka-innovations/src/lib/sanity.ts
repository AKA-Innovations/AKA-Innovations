import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "no-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
  useCdn: true, // Uses edge caching for sub-millisecond responses
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface Post {
  title: string;
  slug: string;
  description: string;
  mainImage: any;
  publishedAt: string;
  readingTime: number;
  author: {
    name: string;
    image: any;
    bio?: any[];
  };
  category: {
    title: string;
  };
  tags?: string[];
  body?: any[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  localSeo?: {
    targetCity?: string;
    targetRegion?: string;
    businessName?: string;
    latitude?: number;
    longitude?: number;
    postalCode?: string;
    address?: string;
  };
}

// Fetch all posts (ordered by publishedAt desc)
export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        description,
        mainImage,
        publishedAt,
        readingTime,
        author-> {
          name,
          image
        },
        category-> {
          title
        },
        tags
      }`
    );
  } catch (error) {
    console.error("Sanity getPosts error:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        description,
        mainImage,
        publishedAt,
        readingTime,
        body,
        author-> {
          name,
          image,
          bio
        },
        category-> {
          title
        },
        tags,
        metaTitle,
        metaDescription,
        keywords,
        localSeo {
          targetCity,
          targetRegion,
          businessName,
          latitude,
          longitude,
          postalCode,
          address
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error(`Sanity getPostBySlug error for slug ${slug}:`, error);
    return null;
  }
}

// Fetch related posts (by category title, excluding current post)
export async function getRelatedPosts(
  currentSlug: string,
  categoryTitle?: string
): Promise<Post[]> {
  if (!categoryTitle) return [];
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current != $currentSlug && category->title == $categoryTitle] | order(publishedAt desc)[0...3] {
        title,
        "slug": slug.current,
        description,
        mainImage,
        publishedAt,
        readingTime,
        author-> {
          name,
          image
        },
        category-> {
          title
        },
        tags
      }`,
      { currentSlug, categoryTitle }
    );
  } catch (error) {
    console.error("Sanity getRelatedPosts error:", error);
    return [];
  }
}
