import { Link } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import type { Route } from '../../documents/base/route';

export type SanityLinkType = {
	_type: 'sanityLink';
	_key: string;
	url?: string;
	route?: Route;
	routeParams?: string;
	routeSlug?: string;
};

const sanityLink = defineType({
	name: 'sanityLink',
	title: 'Link',
	type: 'object',
	icon: Link,
	fields: [
		defineField({
			name: 'route',
			type: 'reference',
			title: 'Route',
			description: 'Route for internal links',
			hidden: ({ parent }) => !!parent?.url,
			to: [{ type: 'route' }],
			options: {
				disableNew: true,
			},
		}),
		defineField({
			name: 'routeParams',
			type: 'string',
			title: 'Route Parameters',
			description: 'Optional route parameters (e.g. #section-id?ref=123)',
			hidden: ({ parent }) => !parent?.route,
		}),
		defineField({
			name: 'url',
			type: 'url',
			title: 'URL',
			description: 'Custom URL for this link',
			hidden: ({ parent }) => !!parent?.route,
			validation: (rule) =>
				rule.uri({
					scheme: ['http', 'https', 'mailto', 'tel'],
					allowRelative: true,
				}),
		}),
	],
	preview: {
		select: {
			url: 'url',
			routeParams: 'routeParams',
			route: 'route',
			routeSlug: 'route.slug.current',
		},
		prepare({ url, route, routeSlug, routeParams }) {
			const subtitle =
				(!!route && `${routeSlug}${routeParams ? `${routeParams}` : ''}`) ||
				url ||
				'No URL/Route set';

			return {
				title: route ? 'External Link' : 'Internal Link',
				subtitle: subtitle,
				media: Link,
			};
		},
	},
});

export default sanityLink;
