import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { getAllCategory, getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categoryList = getAllCategory();
    const postList = getAllPosts();

    // 각 카테고리 URL에 대한 Sitemap 항목 생성
    const generatedCategorySitemap = categoryList.map(category => ({
        url: `${siteConfig.url}/blog/${category}`,
        lastModified: new Date(),
    }));

    // 각 포스트 URL에 대한 Sitemap 항목 생성
    const generatedPostSitemap = postList.map(post => ({
        url: `${siteConfig.url}/blog/${post.category}/${post.frontmatter.slug}`,
        lastModified: post.frontmatter.date,
    }));


    // 카테고리와 포스트의 Sitemap 항목을 합쳐서 반환
    return [...generatedCategorySitemap, ...generatedPostSitemap];
}
