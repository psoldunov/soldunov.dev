import { MonitorIcon } from 'lucide-react';
import { defineQuery } from 'next-sanity';
import type { PortableTextBlock } from 'sanity';
import { extractPortableText, stripNonPrintables } from '@/sanity/lib/utils';
import type { SanityImage } from '@/sanity/types';
import sanityImage from '../fields/sanityImage';
import {
	type BaseSection,
	defineSection,
} from '../objects/constructors/defineSection';

export const HERO_SECTION_QUERY_PART = defineQuery(`
	_type == "heroSection" => {
		...,
		image{
			...,
			asset->
		},
	}`);

export type HeroSectionType = BaseSection & {
	_type: 'heroSection';
	heading: string;
	paragraph: PortableTextBlock[];
	image: SanityImage;
};

const heroSection = defineSection({
	name: 'heroSection',
	title: 'Hero Section',
	icon: MonitorIcon,
	fields: [
		{
			type: 'string',
			name: 'heading',
			title: 'Heading',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'paragraph',
			type: 'array',
			of: [{ type: 'block' }],
			title: 'Paragraph',
			validation: (Rule) => Rule.required(),
		},
		sanityImage({
			title: 'Avatar Image',
			validation: (rule) => rule.required(),
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					description: 'A caption for the image',
				},
			],
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
