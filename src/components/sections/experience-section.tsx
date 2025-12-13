import type { ExperienceSectionProps } from '@/sanity/schemas/sections/experienceSection';
import Connect from '../elements/connect';
import Experience from '../elements/experience';
import Section from '../elements/section';
import Container from '../layout/container';
import SlideInDiv from '../motion/slide-in-div';

export default function ExperienceSectionComponent(
	props: ExperienceSectionProps,
) {
	const {
		expHeading,
		experiences,
		contactHeading,
		contacts,
		_type,
		sectionId,
		sectionPadding,
	} = props;

	return (
		<Section sectionPadding={sectionPadding} type={_type} id={sectionId}>
			<Container>
				<SlideInDiv className='grid gap-8 md:grid-cols-2'>
					<Experience heading={expHeading} items={experiences} />
					<Connect heading={contactHeading} items={contacts} />
				</SlideInDiv>
			</Container>
		</Section>
	);
}
