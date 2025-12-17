import { notFound, redirect } from 'next/navigation';
import JsonLd from '@/components/utility/JsonLd';
import { SectionRenderer } from '@/components/utility/SectionRenderer';
import { generateWebPageSchema } from '@/lib/schema.org';
import {
	getSiteUrl,
	hasDynamicParams,
	normalizeSlug,
	splitSlug,
} from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import {
	ROUTE_QUERY,
	ROUTES_QUERY,
	SITE_SETTINGS_QUERY,
} from '@/sanity/lib/queries';
import { getCachedOGImageUrl } from '@/sanity/lib/utils';
import type { Route } from '@/sanity/schemas/documents/base/route';
import type { SettingsType } from '@/sanity/schemas/documents/base/settings';

export const dynamicParams = true;

export async function generateStaticParams() {
	console.log('Generating static params for routes...');

	const { data }: { data: Route[] } = await sanityFetch({
		query: ROUTES_QUERY,
		stega: false,
		perspective: 'published',
	});

	return data.map((route) => ({
		slug: splitSlug(route.slug.current),
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;

	const { data: route }: { data: Route } = await sanityFetch({
		query: ROUTE_QUERY,
		params: { slug: normalizeSlug(slug) },
	});

	const { data: settings }: { data: SettingsType } = await sanityFetch({
		query: SITE_SETTINGS_QUERY,
	});

	if (!route || !route.page || !route.page.seo) {
		return {};
	}

	const { title, seo } = route.page;

	const siteUrl = getSiteUrl();
	const currentPath = normalizeSlug(slug);
	const canonicalUrl =
		currentPath === '/' ? siteUrl : `${siteUrl}${currentPath}`;

	return {
		title: seo.title || title || '',
		description: seo.description || settings?.description || '',
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			images: [
				seo.ogImage
					? getCachedOGImageUrl(seo.ogImage)
					: settings?.ogImage
						? getCachedOGImageUrl(settings.ogImage)
						: '',
			].filter(Boolean),
		},
	};
}

export default async function Page({
	params,
	searchParams,
}: {
	params: Promise<{ slug?: string[] }>;
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { slug } = await params;

	const { data: route }: { data: Route } = await sanityFetch({
		query: ROUTE_QUERY,
		params: { slug: normalizeSlug(slug) },
	});

	if (!route) {
		return notFound();
	}

	if (route.isRedirect) {
		return redirect(route.redirectRoute.slug.current);
	}

	if (!route.page || !route.page.sections) {
		return notFound();
	}

	const searchParamsObj = hasDynamicParams(route)
		? await searchParams
		: undefined;

	// Generate WebPage schema
	const siteUrl = getSiteUrl();
	const currentPath = normalizeSlug(slug) || '/';
	const pageUrl = `${siteUrl}${currentPath === '/' ? '' : `/${currentPath}`}`;

	const pageTitle = route.page.seo?.title || route.page.title || '';
	const pageDescription = route.page.seo?.description || '';
	const pageImage = route.page.seo?.ogImage
		? getCachedOGImageUrl(route.page.seo.ogImage)
		: undefined;

	const webPageSchema = generateWebPageSchema(
		pageTitle,
		pageDescription,
		pageUrl,
		pageImage,
	);

	return (
		<>
			<JsonLd data={webPageSchema} />
			{route?.page?.sections?.map((section) => {
				return (
					<SectionRenderer
						key={section._key}
						section={section}
						searchParams={searchParamsObj}
					/>
				);
			})}
		</>
	);
}
