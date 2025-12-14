import type { PortfolioSectionProps } from '@/sanity/schemas/sections/portfolioSection';
import Container from '../layout/container';
import SlideInDiv from '../motion/slide-in-div';
import SlideInH2 from '../motion/slide-in-h2';
import SlideInParagraph from '../motion/slide-in-paragraph';
import ProjectCard from '../ui/project-card';

export default function PortfolioSectionComponent({
	projects,
	heading,
	description,
}: PortfolioSectionProps) {
	return (
		<section className='pt-12'>
			<Container>
				<div className='max-w-5xl'>
					{!!heading && (
						<SlideInH2 className='mb-3 font-semibold text-foreground/50 text-xl'>
							{heading}
						</SlideInH2>
					)}
					{!!description && (
						<SlideInParagraph className='mb-16 font-medium text-foreground text-xl leading-tight md:max-w-2xl'>
							{description}
						</SlideInParagraph>
					)}
					<ul className='flex list-none flex-col gap-8'>
						{!!projects?.length &&
							projects.map((project, index) => (
								<li key={`${project._id}-${index}`}>
									<SlideInDiv>
										<article>
											<ProjectCard project={project} />
										</article>
									</SlideInDiv>
									{index < projects.length - 1 && (
										<hr className='mt-8 border-foreground/10 border-dashed' />
									)}
								</li>
							))}
					</ul>
				</div>
			</Container>
		</section>
	);
}
