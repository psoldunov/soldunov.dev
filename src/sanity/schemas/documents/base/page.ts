import { orderRankField } from '@sanity/orderable-document-list';
import { StickyNote } from 'lucide-react';
import { defineType } from 'sanity';
import type { SectionProps } from '@/sanity/schemas/sections';
import sectionTypes from '@/sanity/schemas/sections';
import type { SanityImageObject } from '@/sanity/types';

export type Page = {
	title: string;
	sections?: SectionProps[];
	seo: {
		title?: string;
		description?: string;
		ogImage?: SanityImageObject;
		isExcluded: boolean;
	};
};

const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: StickyNote,
	groups: [
		{
			name: 'content',
			title: 'Content',
		},
		{
			name: 'general',
			title: 'General',
		},
		{
			name: 'footer',
			title: 'Footer',
		},
		{
			name: 'seo',
			title: 'SEO & Metadata',
		},
	],
	fields: [
		{
			name: 'title',
			title: 'Page Title',
			type: 'string',
			group: 'general',
		},
		{
			name: 'sections',
			title: 'Page Sections',
			type: 'array',
			group: 'content',
			of: sectionTypes.map((section) => ({
				type: section.name,
			})),
			options: {
				insertMenu: {
					filter: true,
					views: [
						{
							name: 'grid',
							previewImageUrl: (schemaTypeName) =>
								`/static/${schemaTypeName}.png`,
						},
						{ name: 'list' },
					],
				},
			},
		},
		{
			name: 'seo',
			title: 'SEO & Metadata',
			type: 'object',
			group: 'seo',
			fields: [
				{
					name: 'title',
					title: 'SEO Title',
					type: 'string',
				},
				{
					name: 'description',
					title: 'SEO Description',
					type: 'text',
				},
				{
					name: 'ogImage',
					title: 'Open Graph Image',
					type: 'image',
					options: {
						accept: 'image/png',
					},
				},
				{
					name: 'isExcluded',
					title: 'Hide from search engines',
					type: 'boolean',
					description: 'Noindex and exclude from sitemap',
					initialValue: false,
				},
			],
		},
		orderRankField({ type: 'page' }),
	],
});

export default page;
