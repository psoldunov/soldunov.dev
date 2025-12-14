import type { Project } from '@/sanity/schemas/documents/project';

/**
 * Gets the base URL for the site
 */
function getSiteUrl(): string {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}
	// For server-side, use environment variable or default
	return process.env.NEXT_PUBLIC_SITE_URL || 'https://soldunov.dev';
}

/**
 * Generates Person schema.org JSON-LD
 */
export function generatePersonSchema(
	name: string,
	description: string,
	imageUrl?: string,
	url?: string,
) {
	const schema: {
		'@context': string;
		'@type': string;
		name: string;
		description: string;
		url?: string;
		image?: string;
		jobTitle?: string;
		knowsAbout?: string[];
	} = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name,
		description,
	};

	if (url) {
		schema.url = url;
	}

	if (imageUrl) {
		schema.image = imageUrl;
	}

	// Extract job title and skills from description
	if (description.includes('Developer')) {
		schema.jobTitle = 'Software Developer';
	}

	const skills = ['React', 'Next.js', 'Expo', 'Sanity', 'TypeScript'];
	schema.knowsAbout = skills;

	return schema;
}

/**
 * Generates WebSite schema.org JSON-LD
 */
export function generateWebSiteSchema(
	title: string,
	description: string,
	url: string,
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: title,
		description,
		url,
		publisher: {
			'@type': 'Person',
			name: 'Philipp Soldunov',
		},
	};
}

/**
 * Generates WebPage schema.org JSON-LD
 */
export function generateWebPageSchema(
	title: string,
	description: string,
	url: string,
	imageUrl?: string,
) {
	const schema: {
		'@context': string;
		'@type': string;
		name: string;
		description: string;
		url: string;
		image?: string;
		mainEntity?: {
			'@type': string;
			'@id': string;
		};
	} = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url,
	};

	if (imageUrl) {
		schema.image = imageUrl;
	}

	return schema;
}

/**
 * Generates CreativeWork/SoftwareApplication schema.org JSON-LD for projects
 */
export function generateProjectSchema(project: Project, _imageUrl?: string) {
	const schema: {
		'@context': string;
		'@type': string;
		name: string;
		description: string;
		url: string;
		datePublished?: string;
		creator?: {
			'@type': string;
			name: string;
		};
		image?: string;
		applicationCategory?: string;
		operatingSystem?: string;
		offers?: {
			'@type': string;
			price: string;
			priceCurrency: string;
		};
	} = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: project.name,
		description: project.description,
		url: project.url,
		creator: {
			'@type': 'Person',
			name: 'Philipp Soldunov',
		},
	};

	if (project.year) {
		schema.datePublished = `${project.year}-01-01`;
	}

	if (_imageUrl) {
		schema.image = _imageUrl;
	}

	schema.applicationCategory = 'WebApplication';
	schema.operatingSystem = 'Web';

	return schema;
}

/**
 * Generates BreadcrumbList schema.org JSON-LD
 */
export function generateBreadcrumbSchema(
	items: Array<{ name: string; url: string }>,
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

/**
 * Helper to get site URL
 */
export { getSiteUrl };
