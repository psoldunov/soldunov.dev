import { defineQuery } from 'next-sanity';
import type { BaseSectionProps } from '@/sanity/types';
import defineSection from '../constructors/defineSection';
import type { SanityLinkType } from '../objects/common/sanityLink';
import type { ExperienceItem } from '../objects/experience';
import { BriefcaseIcon } from 'lucide-react';

export type ExperienceSectionProps = BaseSectionProps & {
	expHeading: string;
	experiences: ExperienceItem[];
	contactHeading: string;
	contacts: SanityLinkType[];
};
export const EXPERIENCE_SECTION_QUERY_PART = defineQuery(`
	_type == "experienceSection" => {
		...,
	}`);

const experienceSection = defineSection({
	name: 'experienceSection',
	title: 'Experience & Contact Section',
	icon: BriefcaseIcon,
	fields: [
		{
			type: 'string',
			name: 'expHeading',
			title: 'Experience Heading',
			validation: (rule) => rule.required(),
		},
		{
			type: 'array',
			name: 'experiences',
			title: 'Experiences',
			of: [{ type: 'experience' }],
			validation: (rule) => rule.required().min(1),
		},
		{
			type: 'string',
			name: 'contactHeading',
			title: 'Contact Heading',
			validation: (rule) => rule.required(),
		},
		{
			type: 'array',
			name: 'contacts',
			title: 'Contacts',
			of: [{ type: 'sanityLink' }],
			validation: (rule) => rule.required().min(1),
		},
	],
	preview: {
		select: {
			expHeading: 'expHeading',
			contactHeading: 'contactHeading',
			experiences: 'experiences',
			contacts: 'contacts',
		},
		prepare({ expHeading, contactHeading, experiences, contacts }) {
			return {
				title:
					expHeading && contactHeading
						? `${expHeading} • ${contactHeading}`
						: undefined,
				subtitle: `${experiences.length || 0} experiences • ${contacts.length || 0} contacts`,
			};
		},
	},
});

export default experienceSection;
