import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Route } from '@/sanity/schemas/documents/base/route';
import { dynamicSections } from './sections';

/**
 * Combines class names using clsx and tailwind-merge
 * @param inputs - Class values to combine
 * @returns Merged class names string
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Normalizes slug parameters from Next.js dynamic routes
 * @param slug - The slug parameter (undefined, string, or string array)
 * @returns Normalized slug path starting with '/'
 */
export function normalizeSlug(slug?: string | string[]) {
	// Optional catch-all route with no slug (undefined)
	if (!slug) {
		return '/';
	}

	// Dynamic route (string)
	if (typeof slug === 'string') {
		return slug;
	}

	// Catch-all route (array)
	return `/${slug.join('/')}`;
}

/**
 * Splits a slug string into an array of parts
 * @param slug - The slug string to split
 * @returns Array of slug parts (excluding empty strings)
 */
export function splitSlug(slug: string): string[] {
	return slug.split('/').filter((part) => part !== '');
}

/**
 * Checks if a route contains sections that require dynamic parameters.
 *
 * @param route - The route to check for dynamic sections
 * @returns `true` if the route has dynamic sections, `false` otherwise (including redirect routes or routes without sections)
 */
export function hasDynamicParams(route: Route): boolean {
	if (route.isRedirect || !route.page?.sections) {
		return false;
	}
	return route.page.sections.some((section) =>
		(dynamicSections as string[]).includes(section._type),
	);
}

/**
 * Builds an optimized Sanity CDN image URL with transformation query parameters.
 *
 * Adds width (`w`), height (`h`), and quality (`q`) query parameters to a Sanity image URL
 * for on-the-fly image transformations via Sanity's CDN.
 *
 * @param url - The base Sanity image URL to optimize (typically from `image.asset.url`)
 * @param options - Configuration options for the optimized URL
 * @param options.width - Optional width in pixels (adds `w` query parameter)
 * @param options.height - Optional height in pixels (adds `h` query parameter)
 * @param options.quality - Image quality from 1-100 (adds `q` query parameter, defaults to 100)
 * @returns The optimized Sanity CDN URL string with transformation query parameters appended
 */
export function buildOptimizedImageUrl(
	url: string,
	{
		width,
		height,
		quality = 100,
	}: {
		width?: number;
		height?: number;
		quality?: number;
	},
): string {
	const urlObject = new URL(url);

	if (width) {
		urlObject.searchParams.set('w', width.toString());
	}
	if (height) {
		urlObject.searchParams.set('h', height.toString());
	}
	if (quality) {
		urlObject.searchParams.set('q', quality.toString());
	}

	return urlObject.toString();
}

/**
 * Determines the target attribute for a link based on its URL
 * @param url - The URL to check
 * @returns '_blank' if the URL is external, otherwise undefined
 */
export function getTarget(url: string | undefined): '_blank' | undefined {
	if (!url) return undefined;

	if (
		url.startsWith('http') ||
		url.startsWith('mailto:') ||
		url.startsWith('tel:')
	) {
		return '_blank';
	}
	return undefined;
}
