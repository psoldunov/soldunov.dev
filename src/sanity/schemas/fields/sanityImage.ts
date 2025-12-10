import { defineField, type FieldDefinition, type ImageRule } from 'sanity';

const sanityImage = ({
	title = 'Image',
	name = 'image',
	validation,
	alt = true,
	fields,
}: {
	title?: string;
	name?: string;
	validation?: (rule: ImageRule) => ImageRule;
	alt?: boolean;
	fields?: FieldDefinition[];
}) => {
	return defineField({
		name,
		type: 'image',
		title,
		validation,
		options: {
			accept: 'image/webp, image/png, image/jpeg, image/avif',
			metadata: ['blurhash'],
			hotspot: true,
		},
		fields: [
			...(fields || []),
			...(alt
				? [
						{
							name: 'alt',
							type: 'string',
							title: 'Alt Text',
							description:
								'A short description of the image for accessibility.',
						},
					]
				: []),
		],
	});
};

export default sanityImage;
