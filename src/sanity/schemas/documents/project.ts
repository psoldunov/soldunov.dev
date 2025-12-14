import { orderRankField } from '@sanity/orderable-document-list';
import { CodeXmlIcon } from 'lucide-react';
import { defineType } from 'sanity';
import type { Partner } from './partner';
import type { Technology } from './technology';

export type Project = {
	_id: string;
	_type: 'project';
	_key: string;
	name: string;
	description: string;
	year: string;
	url: string;
	partner?: Partner;
	technologies: Technology[];
};

const project = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	icon: CodeXmlIcon,
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
			validation: (rule) => rule.required().min(1),
		},
		{
			name: 'partner',
			title: 'Partner',
			type: 'reference',
			to: [{ type: 'partner' }],
		},
		orderRankField({ type: 'project' }),
	],
	preview: {
		select: {
			name: 'name',
			description: 'description',
		},
		prepare({ name, description }) {
			return {
				title: name,
				subtitle: description,
			};
		},
	},
});

export default project;
