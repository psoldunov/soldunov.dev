import { defineField, type Rule } from 'sanity';

/**
 * Defines a Sanity icon picker field with SVG storage enabled.
 * Creates a reusable icon field definition that uses the icon picker plugin
 * and stores the selected icon as SVG.
 *
 * @param options - Configuration options for the icon field
 * @param options.title - The display title for the icon field (defaults to 'Icon')
 * @param options.name - The field name/identifier (defaults to 'icon')
 * @param options.validation - Optional validation function to apply custom validation rules
 * @returns A Sanity field definition for an icon picker with SVG storage enabled
 */
export default function defineIcon({
	title = 'Icon',
	name = 'icon',
	validation,
}: {
	title?: string;
	name?: string;
	validation?: (rule: Rule) => Rule;
}) {
	return defineField({
		name,
		type: 'iconPicker',
		title,
		validation,
		options: {
			storeSvg: true,
		},
	});
}
