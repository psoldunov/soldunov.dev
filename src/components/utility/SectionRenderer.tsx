import type { ElementType } from 'react';
import sections from '@/lib/sections';
import type { SectionType } from '@/sanity/schemas/sections';

function SectionComponent(_type: keyof typeof sections): ElementType {
	return sections[_type];
}

export function SectionRenderer({
	section,
	searchParams,
}: {
	section: SectionType;
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const { _type } = section;

	if (!(_type in sections)) {
		console.warn(`Section type "${_type}" is not registered.`);
		return null;
	}

	const Renderer = SectionComponent(_type as keyof typeof sections);

	return <Renderer {...section} searchParams={searchParams} />;
}
