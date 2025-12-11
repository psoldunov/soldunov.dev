import {
	defineLocations,
	type PresentationPluginOptions,
} from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
	locations: {
		route: defineLocations({
			select: {
				title: 'page.title',
				slug: 'slug.current',
			},
			resolve: (doc) => ({
				locations: [
					{
						title: doc?.title,
						href: doc?.slug,
					},
				],
			}),
		}),
	},
};
