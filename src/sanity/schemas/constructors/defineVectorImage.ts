import type { ObjectRule, ValidationBuilder } from 'sanity';
import { defineField } from 'sanity';

export default function defineVectorImage({
	title,
	name,
	validation,
}: {
	title: string;
	name: string;
	validation?: ValidationBuilder<ObjectRule, Record<string, unknown>>;
}) {
	return defineField({
		name,
		type: 'code',
		title,
		validation,
		options: {
			language: 'xml',
			languageAlternatives: [{ title: 'SVG', value: 'xml' }],
		},
	});
}
