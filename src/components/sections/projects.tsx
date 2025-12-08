import type { StaticImageData } from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import type { IconType } from 'react-icons';
import {
	SiNextdotjs,
	SiReact,
	SiSanity,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import SlideInDiv from '../elements/slide-in-div';
import Container from '../layout/container';
import ProjectCard from '../ui/project-card';

interface Project {
	name: string;
	year: string;
	description: string;
	image: StaticImageData;
	url: string;
	technologies: IconType[];
	partnerLogo?: StaticImageData;
}

const projects: Project[] = [
	{
		name: 'Toca Madera',
		year: '2023',
		description:
			'Built a modern restaurant website with online reservations, integrated Sanity CMS for dynamic menu management, and optimized performance for mobile devices.',
		image: {} as StaticImageData, // Replace with actual image
		url: 'https://tocamadera.com',
		technologies: [SiNextdotjs, SiReact, SiSanity, SiTypescript, SiTailwindcss],
		partnerLogo: {} as StaticImageData, // Replace with actual partner logo
	},
	{
		name: 'Navier',
		year: '2024',
		description:
			'Developed an interactive product showcase platform for electric boats, implemented 3D model integration, and created a custom booking system.',
		image: {} as StaticImageData, // Replace with actual image
		url: 'https://navierboat.com',
		technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
		partnerLogo: {} as StaticImageData, // Replace with actual partner logo
	},
	{
		name: 'Learneo',
		year: '2022',
		description:
			'Created a comprehensive learning management system with real-time collaboration features, progress tracking, and content delivery optimization.',
		image: {} as StaticImageData, // Replace with actual image
		url: 'https://learneo.com',
		technologies: [SiNextdotjs, SiReact, SiSanity, SiTypescript, SiTailwindcss],
		partnerLogo: {} as StaticImageData, // Replace with actual partner logo
	},
];

export default function ProjectsSection() {
	return (
		<section className='pt-12'>
			<Container>
				<div className='max-w-5xl'>
					<h2 className='mb-3 font-semibold text-foreground/40 text-xl'>
						Featured Projects
					</h2>
					<div className='flex flex-col gap-8'>
						{projects.map((project, index) => (
							<Fragment key={project.name}>
								<SlideInDiv>
									<ProjectCard project={project} />
									{index < projects.length - 1 && (
										<hr className='mt-8 border-foreground/10 border-dashed' />
									)}
								</SlideInDiv>
							</Fragment>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
