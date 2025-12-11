import type { PortableTextBlock } from 'sanity';
import type { BaseSectionProps, SanityImageObject } from '@/sanity/types';
import Section from '../elements/section';
import SlideInDiv from '../elements/slide-in-div';
import Container from '../layout/container';
import AvatarInteraction from '../ui/avatar-interaction';
import FancyPortableText from '../ui/fancy-portable-text';
import SanityImage from '../utility/SanityImage';

export type HeroSectionProps = BaseSectionProps & {
	_type: 'heroSection';
	heading: string;
	paragraph: PortableTextBlock[];
	image: SanityImageObject;
};

export default function HeroSection({
	_type,
	heading,
	paragraph,
	image,
	sectionId,
	sectionPadding,
	hidden,
}: HeroSectionProps) {
	if (hidden) return null;

	return (
		<Section sectionPadding={sectionPadding} type={_type} id={sectionId}>
			<Container>
				<AvatarInteraction className='mb-8 max-w-30'>
					<SanityImage
						image={image}
						className='rounded-full'
						width={300}
						height={300}
						quality={100}
					/>
				</AvatarInteraction>
				{!!heading && (
					<h1 className='font-semibold text-4.5xl text-foreground/40'>
						{heading}
					</h1>
				)}
				<SlideInDiv>
					<FancyPortableText value={paragraph} />
				</SlideInDiv>
			</Container>
		</Section>
	);
}
