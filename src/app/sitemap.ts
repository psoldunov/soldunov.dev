import type { MetadataRoute } from 'next';
import { groq } from 'next-sanity';
import { getSiteUrl } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';

interface SitemapEntry {
	url: string;
	lastModified?: string | Date;
	changeFrequency?:
		| 'always'
		| 'hourly'
		| 'daily'
		| 'weekly'
		| 'monthly'
		| 'yearly'
		| 'never';
	priority?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = getSiteUrl();

	const sitemapEntries: SitemapEntry[] = [];

	try {
		const { data: routes } = await sanityFetch({
			query: groq`*[_type == "route"] {
        _id,
        _updatedAt,
        slug,
        isRedirect,
        redirectRoute->
      }`,
			stega: false,
			perspective: 'published',
		});

		for (const route of routes) {
			if (route.slug?.current) {
				const url =
					route.slug.current === '/' ? baseUrl : baseUrl + route.slug.current;

				sitemapEntries.push({
					url,
					lastModified: route._updatedAt || new Date(),
					changeFrequency: route.slug.current === '/' ? 'daily' : 'weekly',
					priority: route.slug.current === '/' ? 1.0 : 0.8,
				});
			}
		}
	} catch (error) {
		console.error('Error generating sitemap:', error);

		sitemapEntries.push({
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1.0,
		});
	}

	sitemapEntries.sort((a, b) => {
		if (a.priority !== b.priority) {
			return (b.priority || 0) - (a.priority || 0);
		}
		return a.url.localeCompare(b.url);
	});

	return sitemapEntries;
}
