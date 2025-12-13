import type { PortableTextBlock } from 'sanity';
import type { BaseSectionProps, SanityImageObject } from '@/sanity/types';
import Section from '../elements/section';
import Container from '../layout/container';
import SlideInDiv from '../motion/slide-in-div';
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
					<h1 className='font-semibold text-3xl text-foreground/50 md:text-4.5xl'>
						{heading}
					</h1>
				)}
				<SlideInDiv priority>
					<FancyPortableText value={paragraph} />
				</SlideInDiv>
			</Container>
		</Section>
	);
}
