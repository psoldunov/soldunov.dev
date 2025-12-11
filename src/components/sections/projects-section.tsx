'use client';

import { motion, type Variants } from 'motion/react';
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
import Container from '../layout/container';
import ProjectCard from '../ui/project-card';

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

const itemVariants: Variants = {
	hidden: { translateY: 20, opacity: 0 },
	show: {
		translateY: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

export interface Project {
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
					<motion.h2
						initial={{ translateY: 20, opacity: 0 }}
						whileInView={{ translateY: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='mb-3 font-semibold text-foreground/40 text-xl'
					>
						Featured Projects
					</motion.h2>
					<motion.div
						className='flex flex-col gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
					>
						{projects.map((project, index) => (
							<Fragment key={project.name}>
								<motion.div variants={itemVariants}>
									<ProjectCard project={project} />
								</motion.div>
								{index < projects.length - 1 && (
									<motion.hr
										variants={itemVariants}
										className='mt-8 border-foreground/10 border-dashed'
									/>
								)}
							</Fragment>
						))}
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
