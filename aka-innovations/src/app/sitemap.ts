import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/sanity'
import { mockPosts } from '@/lib/mockData'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.akainnovations.com'

    let posts = await getPosts();
    
    // Fallback to mock posts if Sanity not configured yet
    if (!posts || posts.length === 0) {
        posts = mockPosts;
    }

    const blogSitemaps = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        // Core pages
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // School ERP — Hub
        {
            url: `${baseUrl}/school-erp`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        // School ERP — Positioning / SEO Landing Pages
        {
            url: `${baseUrl}/school-management-system-india`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ai-school-erp`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/agentic-school-erp`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // School ERP — Role Pages
        {
            url: `${baseUrl}/principal-dashboard`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        // School ERP — Module Pages
        {
            url: `${baseUrl}/attendance-management`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/examination-management`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/school-fee-management`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/parent-app`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // School ERP — Comparison Pages
        {
            url: `${baseUrl}/compare/traditional-school-erp`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/manual-vs-ai-school`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // School ERP — Guide Pages
        {
            url: `${baseUrl}/guides/what-is-school-erp`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/guides/how-ai-is-changing-schools`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/guides/choose-school-erp`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        // Other site pages
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/healthcare-software-development`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/producthealth`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        ...blogSitemaps,
    ]
}

