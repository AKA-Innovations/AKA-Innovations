import { createClient } from "@sanity/client";
import { mockPosts } from "../src/lib/mockData";
import fs from "fs";
import path from "path";

// Parse .env manually if process.env.SANITY_API_WRITE_TOKEN is not set
if (!process.env.SANITY_API_WRITE_TOKEN) {
  try {
    const envPath = path.resolve(__dirname, "../.env");
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf8");
      envContent.split("\n").forEach((line) => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || "";
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
          } else if (value.startsWith("'") && value.endsWith("'")) {
            value = value.substring(1, value.length - 1);
          }
          process.env[key] = value.trim();
        }
      });
    }
  } catch (err) {
    console.warn("Could not parse .env file manually:", err);
  }
}

const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("❌ Error: SANITY_API_WRITE_TOKEN environment variable is not defined.");
  console.log("Please create a 'Write' token in your Sanity dashboard (sanity.io/manage > API settings) and run:");
  console.log('  $env:SANITY_API_WRITE_TOKEN="your_token"');
  console.log("  npx tsx sanity/seed.ts");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "no-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
  useCdn: false, // Must be false for write actions
  token: token,
});

async function downloadAndUploadImage(url: string, filename: string) {
  try {
    console.log(`Downloading image: ${url}...`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log(`Uploading asset: ${filename} to Sanity...`);
    const asset = await client.assets.upload("image", buffer, {
      filename: filename,
    });
    console.log(`Uploaded asset ID: ${asset._id}`);
    return asset;
  } catch (error) {
    console.error(`❌ Failed to upload image ${filename}:`, error);
    return null;
  }
}

async function seed() {
  console.log("🚀 Starting Sanity database seeding...");
  
  if (client.config().projectId === "no-project-id") {
    console.error("❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not configured in environment variables.");
    process.exit(1);
  }

  for (const post of mockPosts) {
    console.log(`\nProcessing Article: "${post.title}"...`);

    // 1. Create or Find Category
    const categoryTitle = post.category.title;
    const categorySlug = categoryTitle.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const categoryDoc = {
      _type: "category",
      _id: `category-${categorySlug}`,
      title: categoryTitle,
      description: `Articles regarding ${categoryTitle}`,
    };
    
    console.log(`Syncing category: ${categoryTitle}`);
    await client.createOrReplace(categoryDoc);

    // 2. Create or Find Author & Upload Avatar Image
    const authorName = post.author.name;
    const authorSlug = authorName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    
    let authorImageRef: any = null;
    if (post.author.image) {
      const asset = await downloadAndUploadImage(
        post.author.image,
        `avatar-${authorSlug}.jpg`
      );
      if (asset) {
        authorImageRef = {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        };
      }
    }

    const authorDoc = {
      _type: "author",
      _id: `author-${authorSlug}`,
      name: authorName,
      bio: post.author.bio || [],
      ...(authorImageRef ? { image: authorImageRef } : {}),
    };

    console.log(`Syncing author: ${authorName}`);
    await client.createOrReplace(authorDoc);

    // 3. Upload Post Cover Image
    let mainImageRef: any = null;
    if (post.mainImage?.asset?.url) {
      const asset = await downloadAndUploadImage(
        post.mainImage.asset.url,
        `cover-${post.slug}.jpg`
      );
      if (asset) {
        mainImageRef = {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        };
      }
    }

    // 4. Create Post Document
    const postDoc = {
      _type: "post",
      _id: `post-${post.slug}`,
      title: post.title,
      slug: {
        _type: "slug",
        current: post.slug,
      },
      description: post.description,
      publishedAt: post.publishedAt,
      readingTime: post.readingTime,
      body: post.body || [],
      tags: post.tags || [],
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      keywords: post.keywords,
      category: {
        _type: "reference",
        _ref: `category-${categorySlug}`,
      },
      author: {
        _type: "reference",
        _ref: `author-${authorSlug}`,
      },
      localSeo: post.localSeo ? {
        _type: "object",
        businessName: post.localSeo.businessName,
        targetCity: post.localSeo.targetCity,
        targetRegion: post.localSeo.targetRegion,
        postalCode: post.localSeo.postalCode,
        address: post.localSeo.address,
        latitude: post.localSeo.latitude,
        longitude: post.localSeo.longitude,
      } : undefined,
      ...(mainImageRef ? { mainImage: mainImageRef } : {}),
    };

    console.log(`Publishing post: "${post.title}"`);
    await client.createOrReplace(postDoc);
    console.log(`✅ Success! Published article to Sanity.`);
  }

  console.log("\n🎉 Database seed synchronization complete!");
}

seed().catch((err) => {
  console.error("❌ Seeding failed with unexpected error:", err);
});
