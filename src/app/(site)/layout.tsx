import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider } from 'jotai';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import grain from '@/assets/grain.png';
import Footer from '@/components/layout/footer';
import Html from '@/components/layout/html';
import Smooth from '@/components/motion/smooth';
import DisableDraftMode from '@/components/utility/DisableDraftMode';
import JsonLd from '@/components/utility/JsonLd';
import { sfMono, sfProDisplay } from '@/fonts';
import { generatePersonSchema, generateWebSiteSchema } from '@/lib/schema.org';
import { cn, getSiteUrl } from '@/lib/utils';
import { SanityLive, sanityFetch } from '@/sanity/lib/live';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getCachedOGImageUrl } from '@/sanity/lib/utils';
import type { SettingsType } from '@/sanity/schemas/documents/base/settings';

export async function generateMetadata(): Promise<Metadata> {
	const { data: settings }: { data: SettingsType } = await sanityFetch({
		query: SITE_SETTINGS_QUERY,
	});

	const defaultTitle =
		'Philipp Soldunov | React, Next.js, Expo and Sanity Developer';
	const defaultDescription =
		'Software developer focused on fast Next.js apps, Sanity-powered sites, and React/Expo mobile work for brands like Haartz, Learneo, Atlas, and Navier.';

	return {
		metadataBase: new URL(getSiteUrl()),
		title: settings?.title || defaultTitle,
		description: settings?.description || defaultDescription,
		openGraph: {
			images: settings?.ogImage ? [getCachedOGImageUrl(settings.ogImage)] : [],
			siteName: 'Philipp Soldunov',
			type: 'website',
			url: getSiteUrl(),
			locale: 'en_US',
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data: settings }: { data: SettingsType } = await sanityFetch({
		query: SITE_SETTINGS_QUERY,
	});

	const siteUrl = getSiteUrl();

	const personName = 'Philipp Soldunov';
	const personDescription =
		settings?.description ||
		'Software developer focused on fast Next.js apps, Sanity-powered sites, and React/Expo mobile work for brands like Haartz, Learneo, Atlas, and Navier.';
	const siteTitle = settings?.title || 'Philipp Soldunov';
	const siteDescription = settings?.description || '';

	const schemas = [
		generatePersonSchema(personName, personDescription, undefined, siteUrl),
		generateWebSiteSchema(siteTitle, siteDescription, siteUrl),
	];

	return (
		<Provider>
			<Html lang='en'>
				<JsonLd data={schemas} />
				<body
					className={cn(
						'bg-(image:--bg-image) bg-size-[100px_100px] bg-repeat antialiased',
						sfProDisplay.variable,
						sfMono.variable,
					)}
					style={{ '--bg-image': `url(${grain.src})` } as React.CSSProperties}
				>
					<a
						href='#main-content'
						className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background'
					>
						Skip to main content
					</a>
					<Smooth>
						<main id='main-content'>{children}</main>
						<Footer />
					</Smooth>
					<SanityLive />
					{(await draftMode()).isEnabled && (
						<>
							<DisableDraftMode />
							<VisualEditing />
						</>
					)}
					<Analytics />
					<SpeedInsights />
				</body>
			</Html>
		</Provider>
	);
}
