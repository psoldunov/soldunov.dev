import type { HeroSectionType } from '@/sanity/schemas/sections/heroSection';

export default function HeroSectionComponent({
	_type,
	heading,
	paragraph,
	image,
	id,
	hidden,
}: HeroSectionType) {
	if (hidden) return null;

	return (
		<section
			id={id}
			section-type={_type}
			className='bg-black text-white'
		></section>
	);
}
