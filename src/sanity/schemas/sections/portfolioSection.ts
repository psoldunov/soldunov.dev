import { GridIcon } from 'lucide-react';
import type { BaseSectionProps } from '@/sanity/types';
import defineSection from '../constructors/defineSection';
import type { Project } from '../documents/project';

export type PortfolioSectionProps = BaseSectionProps & {
	_type: 'portfolioSection';
	heading: string;
	description: string;
	projects: Project[];
};

const portfolioSection = defineSection({
	name: 'portfolioSection',
	title: 'Portfolio Section',
	icon: GridIcon,
	fields: [
		{
			name: 'heading',
			title: 'Heading',
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
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'project' }] }],
			validation: (rule) => rule.required(),
		},
	],
});

export default portfolioSection;
