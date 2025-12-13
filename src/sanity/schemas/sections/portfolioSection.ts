import { FileBracesCornerIcon } from 'lucide-react';
import { defineQuery } from 'next-sanity';
import { getImageFragment } from '@/sanity/lib/queries/fragments';
import type { BaseSectionProps } from '@/sanity/types';
import defineSection from '../constructors/defineSection';
import type { Project } from '../documents/project';

export const PORTFOLIO_SECTION_QUERY_PART = defineQuery(`	
	_type == "portfolioSection" => {
		...,
		projects[]->{
			...,
			technologies[]->,
			${getImageFragment('image')}
		}
	}`);

export type PortfolioSectionProps = BaseSectionProps & {
	_type: 'portfolioSection';
	heading: string;
	description: string;
	projects: Project[];
};

const portfolioSection = defineSection({
	name: 'portfolioSection',
	title: 'Portfolio Section',
	icon: FileBracesCornerIcon,
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
	preview: {
		select: {
			heading: 'heading',
			description: 'description',
			projects: 'projects',
		},
		prepare({ heading, description, projects }) {
			return {
				title: heading,
				subtitle: description
					? `${projects?.length || 0} projects • ${description}`
					: `${projects?.length || 0} projects`,
			};
		},
	},
});

export default portfolioSection;
