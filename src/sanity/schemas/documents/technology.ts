import { orderRankField } from '@sanity/orderable-document-list';
import { CodeIcon } from 'lucide-react';
import { defineType } from 'sanity';

const technology = defineType({
	name: 'technology',
	title: 'Technology',
	type: 'document',
	icon: CodeIcon,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (rule) => rule.required(),
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'iconPicker',
			validation: (rule) => rule.required(),
		},
		orderRankField({ type: 'technology' }),
	],
});

export default technology;
