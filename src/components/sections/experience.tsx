import Connect from '../elements/connect';
import Experience from '../elements/experience';
import SlideInDiv from '../elements/slide-in-div';
import Container from '../layout/container';

export default function ExperienceSection() {
	return (
		<section className='pt-8'>
			<Container>
				<SlideInDiv className='grid gap-8 md:grid-cols-2'>
					<Experience />
					<Connect />
				</SlideInDiv>
			</Container>
		</section>
	);
}
