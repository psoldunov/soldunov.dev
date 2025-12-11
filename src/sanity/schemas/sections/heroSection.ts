import { MonitorIcon } from 'lucide-react';
import { defineQuery } from 'next-sanity';
import { getImageFragment } from '@/sanity/lib/queries/fragments';
import { extractPortableText, stripNonPrintables } from '@/sanity/lib/utils';
import defineImage from '../constructors/defineImage';
import defineSection from '../constructors/defineSection';
export const HERO_SECTION_QUERY_PART = defineQuery(`
	_type == "heroSection" => {
		...,
		${getImageFragment('image')}
	}`);

const heroSection = defineSection({
	name: 'heroSection',
	title: 'Hero Section',
	icon: MonitorIcon,
	fields: [
		{
			type: 'string',
			name: 'heading',
			title: 'Heading',
			validation: (rule) => rule.required(),
		},
		{
			name: 'paragraph',
			type: 'array',
			of: [{ type: 'block', styles: [], lists: [], marks: { decorators: [] } }],
			title: 'Paragraph',
			validation: (rule) => rule.required(),
		},
		defineImage({
			title: 'Image',
			validation: (rule) => rule.required(),
			hotspot: true,
		}),
	],
	preview: {
		select: {
			heading: 'heading',
			paragraph: 'paragraph',
			media: 'image',
		},
		prepare({ heading, paragraph, media }) {
			return {
				title: heading ? stripNonPrintables(heading) : undefined,
				subtitle: paragraph ? extractPortableText(paragraph) : undefined,
				media: media,
			};
		},
	},
});

export default heroSection;
