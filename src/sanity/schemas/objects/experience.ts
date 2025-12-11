import { BriefcaseIcon } from 'lucide-react';
import { defineType } from 'sanity';

export type ExperienceItem = {
	_type: 'experience';
	_key: string;
	company?: string;
	position: string;
	url?: string;
	dates: string;
};

const experience = defineType({
	type: 'object',
	name: 'experience',
	title: 'Experience',
	icon: BriefcaseIcon,
	fields: [
		{
			type: 'string',
			name: 'company',
			title: 'Company',
			validation: (rule) => rule.optional(),
		},
		{
			type: 'string',
			name: 'position',
			title: 'Position',
			validation: (rule) => rule.required(),
		},
		{
			type: 'url',
			name: 'url',
			title: 'Company URL',
			validation: (rule) => rule.optional(),
		},
		{
			name: 'dates',
			type: 'string',
			title: 'Dates',
			validation: (rule) => rule.required(),
		},
	],
	preview: {
		select: {
			company: 'company',
			position: 'position',
			dates: 'dates',
		},
		prepare({ company, position, dates }) {
			return {
				title: company ? company : position,
				subtitle: `${company ? `${position} • ` : ''}${dates ? dates : ''}`,
			};
		},
	},
});

export default experience;
