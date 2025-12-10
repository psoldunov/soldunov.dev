import type { ComponentType, ReactElement } from 'react';
import { defineType, type FieldDefinition, type PreviewConfig } from 'sanity';

export type BaseSection = {
	_type: string;
	_key?: string;
	searchParams?: { [key: string]: string | string[] | undefined };
	sectionId?: string;
	hidden?: boolean;
};

export const defineSection = ({
	name,
	title,
	icon,
	fields,
	preview,
}: {
	name: string;
	title: string;
	icon?: ComponentType | ReactElement;
	fields: FieldDefinition[];
	preview: PreviewConfig;
}) => {
	return defineType({
		name,
		type: 'object',
		title,
		icon,
		fields: [
			...fields,
			{
				type: 'string',
				name: 'sectionId',
				title: 'Section ID',
				description: 'The ID of the section',
				validation: (rule) => rule.optional(),
			},
			{
				type: 'boolean',
				name: 'hidden',
				title: 'Hidden',
				description: 'Whether the section is hidden',
				initialValue: false,
			},
		],
		preview,
	});
};
