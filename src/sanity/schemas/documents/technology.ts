import { preview } from '@psoldunov/sanity-plugin-icon-picker';
import { orderRankField } from '@sanity/orderable-document-list';
import { CpuIcon } from 'lucide-react';
import { defineType } from 'sanity';
import type { SanityIconObject } from '@/sanity/types';
import defineIcon from '../constructors/defineIcon';

export type Technology = {
	_id: string;
	_type: 'technology';
	_key: string;
	icon: SanityIconObject;
	name: string;
	url?: string;
};

const technology = defineType({
	name: 'technology',
	title: 'Technology',
	type: 'document',
	icon: CpuIcon,
	fields: [
		defineIcon({
			validation: (rule) => rule.required(),
		}),
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (rule) => rule.required(),
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: (rule) => rule.optional(),
		},
		orderRankField({ type: 'technology' }),
	],
	preview: {
		select: {
			name: 'name',
			url: 'url',
			icon: 'icon',
		},
		prepare({ name, url, icon }) {
			return {
				title: name,
				subtitle: url,
				media: preview(icon),
			};
		},
	},
});

export default technology;
