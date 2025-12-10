import { orderRankField } from '@sanity/orderable-document-list';
import type { SanityDocument } from 'next-sanity';
import { RiRouteLine } from 'react-icons/ri';
import { defineField, defineType, type Slug } from 'sanity';
import {
	getProtectedRouteError,
	isProtectedRoute,
} from '@/sanity/lib/protectedRoutes';
import type { Page } from './page';

export type Route = {
	slug: Slug;
} & (
	| {
			isRedirect: true;
			redirectRoute: Route;
			page?: never;
	  }
	| {
			isRedirect: false;
			page: Page;
			redirectRoute?: never;
	  }
);

const route = defineType({
	name: 'route',
	type: 'document',
	title: 'Route',
	description: 'Map urls to pages',
	icon: RiRouteLine,
	fields: [
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: (rule) =>
				rule.custom((value) => {
					if (value?.current) {
						// Check if slug starts with '/'
						if (!value.current.startsWith('/')) {
							return 'Slug must start with a /';
						}

						// Check for tabs, spaces, and uppercase letters
						if (/[\s\t]/.test(value.current)) {
							return 'Slug cannot contain spaces or tabs';
						}

						if (/[A-Z]/.test(value.current)) {
							return 'Slug cannot contain uppercase letters';
						}

						// Check if slug conflicts with protected routes
						if (isProtectedRoute(value.current)) {
							return getProtectedRouteError(value.current);
						}
					}
					return true;
				}),
		}),
		defineField({
			name: 'isRedirect',
			type: 'boolean',
			title: 'Redirect to another route',
			initialValue: false,
		}),
		defineField({
			name: 'page',
			type: 'reference',
			description: 'Select the page that this route should point to',
			hidden: ({ parent }: { parent: { isRedirect: boolean } }) =>
				parent?.isRedirect,
			to: [
				{
					type: 'page',
				},
			],
			validation: (rule) =>
				rule.custom((value, context) => {
					if (context.document?.isRedirect === false && !value) {
						return 'You must provide a page';
					}
					return true;
				}),
			options: {
				disableNew: true,
			},
		}),
		defineField({
			name: 'redirectRoute',
			type: 'reference',
			description: 'Select the route that this route should redirect to',
			hidden: ({ parent }: { parent: { isRedirect: boolean } }) =>
				!parent?.isRedirect,
			to: [
				{
					type: 'route',
				},
			],
			options: {
				filter: ({ document }) => {
					const { slug } = document as SanityDocument & {
						slug: { current: string };
					};

					return {
						filter: 'slug.current != $slugValue',
						params: {
							slugValue: slug.current,
						},
					};
				},
				disableNew: true,
			},
			validation: (rule) =>
				rule.custom((value, context) => {
					if (context.document?.isRedirect === true && !value) {
						return 'You must provide a redirect route';
					}
					return true;
				}),
		}),
		orderRankField({ type: 'route' }),
	],
	preview: {
		select: {
			slug: 'slug.current',
			pageTitle: 'page.title',
			isRedirect: 'isRedirect',
		},
		prepare({
			slug,
			pageTitle,
			isRedirect,
		}: {
			slug: string;
			pageTitle: string;
			isRedirect: boolean;
		}) {
			return {
				title: slug + (pageTitle ? ` -> ${pageTitle}` : ''),
				subtitle: isRedirect ? 'Redirect Route' : 'Route',
			};
		},
	},
});

export default route;
