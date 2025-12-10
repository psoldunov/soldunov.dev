import { ProjectsIcon } from '@sanity/icons';
import { defineType } from 'sanity';

const project = defineType({
	name: 'project',
	type: 'document',
	title: 'Project',
	icon: ProjectsIcon,
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'url',
			type: 'url',
			title: 'URL',
		},
	],
});

export default project;
