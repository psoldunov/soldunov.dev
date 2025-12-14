import { orderRankField } from '@sanity/orderable-document-list';
import { UserIcon } from 'lucide-react';
import { defineType } from 'sanity';
import defineVectorImage from '../constructors/defineVectorImage';

export type Partner = {
	_id: string;
	_type: 'partner';
	_key: string;
	name: string;
	link: string;
	logo: {
		code: string;
	};
};

const partner = defineType({
	name: 'partner',
	title: 'Partner',
	type: 'document',
	icon: UserIcon,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (rule) => rule.required(),
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
			validation: (rule) => rule.required(),
		},
		defineVectorImage({
			title: 'Logo',
			name: 'logo',
			validation: (rule) => rule.required(),
		}),
		orderRankField({ type: 'partner' }),
	],
});

export default partner;
