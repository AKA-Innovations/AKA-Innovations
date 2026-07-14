# Sanity CMS Setup Instructions

To connect your Next.js application to Sanity.io and manage blogs, articles, authors, and local SEO configuration, follow these steps:

## 1. Initialize Sanity Project

If you already have a Sanity project, you can use its project ID. If not, create a new Sanity project:

1. Run the following command in a separate terminal:
   ```bash
   npm create sanity@latest
   ```
2. Choose to create a new project.
3. Select `production` as the default dataset.
4. Select `Clean project` or `Blog template`.
5. Keep the generated `sanity.config.ts` or set it up in your CMS environment.

## 2. Deploy Schema Definitions

In your Sanity Studio schemas folder (typically `schemas/` or `schemaTypes/` depending on the template), import and register the following schema templates provided in this folder:

- [post.ts](file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/post.ts)
- [author.ts](file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/author.ts)
- [category.ts](file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/category.ts)

For example, in Sanity v3 `schemaTypes/index.ts`:
```typescript
import post from './post'
import author from './author'
import category from './category'

export const schemaTypes = [post, author, category]
```

## 3. Environment Variables Configuration

Copy your Sanity project credentials into your `.env` or `.env.local` configuration:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

## 4. Run Sanity Studio

Run the studio server locally to manage contents:
```bash
npx sanity dev
```
Navigate to `http://localhost:3333` to add your authors, categories, and articles!

### Local SEO Target Feature
When writing posts, you can fill in the `Local SEO` block. For example, if you write a post titled "Implementing School Management System Bangalore", add Bangalore's postal code, latitude, and longitude to automatically inject specialized Local Business JSON-LD structure metadata to dominate local search indices.

## 5. Synchronizing Pre-made Storytelling Articles

We have written three detailed, storytelling-focused, SEO-optimized articles about AKA Innovations services and products. To publish them instantly to your Sanity.io CMS:

1. **Create a Write Token:**
   - Go to your Sanity.io dashboard (`sanity.io/manage`).
   - Navigate to **API** settings.
   - Click **Add API token**, set **Permissions** to **Write**, and save.
2. **Run the Seeder:**
   - In your PowerShell terminal, set the token and run the seed command:
     ```bash
     $env:SANITY_API_WRITE_TOKEN="your_copied_write_token"
     npx tsx sanity/seed.ts
     ```
This script will connect to your project database, download cover images, upload them to your assets pool, and publish categories, authors, and article structures dynamically!
