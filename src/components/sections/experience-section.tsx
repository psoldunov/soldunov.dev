import type { ExperienceSectionProps } from '@/sanity/schemas/sections/experienceSection';
import Connect from '../elements/connect';
import Experience from '../elements/experience';
import Section from '../elements/section';
import SlideInDiv from '../elements/slide-in-div';
import Container from '../layout/container';

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
