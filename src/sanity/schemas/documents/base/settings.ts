import { CogIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import type { SanityImageObject } from '@/sanity/types';

export type SettingsType = {
	title: string;
	description: string;
	ogImage: SanityImageObject;
};

const settings = defineType({
	name: 'settings',
	type: 'document',
	title: 'Site Settings',
	icon: CogIcon,
	groups: [
		{
			name: 'general',
			title: 'General',
		},
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			group: 'general',
			title: 'Site Title',
			description:
				'The title of your site, displayed in the browser tab and search results.',
			validation: (Rule) => Rule.required().min(1).max(100),
		},
		{
			name: 'description',
			type: 'text',
			group: 'general',
			title: 'Site Description',
			description:
				'A brief description of your site, used for SEO and social media sharing.',
			validation: (Rule) => Rule.required().min(1).max(160),
		},
		{
			name: 'ogImage',
			type: 'image',
			group: 'general',
			title: 'Open Graph Image',
			description: 'The image used for sharing your site on social media.',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Site Settings',
			};
		},
	},
});

export default settings;
