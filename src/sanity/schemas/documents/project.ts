import { orderRankField } from '@sanity/orderable-document-list';
import { CodeIcon } from 'lucide-react';
import { defineType } from 'sanity';
import defineImage from '../constructors/defineImage';

export type Project = {
	_type: 'project';
	_key: string;
};

const project = defineType({
	name: 'project',
	title: 'Project',
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
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (rule) => rule.required(),
		},
		{
			name: 'year',
			title: 'Year',
			type: 'string',
			validation: (rule) => rule.required(),
		},
		defineImage({
			title: 'Image',
			validation: (rule) => rule.required(),
		}),
		{
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: (rule) => rule.required(),
		},
		{
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'technology' }] }],
			validation: (rule) => rule.required(),
		},
		orderRankField({ type: 'project' }),
	],
});

export default project;
