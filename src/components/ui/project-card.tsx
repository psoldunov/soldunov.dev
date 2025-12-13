import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/sanity/schemas/documents/project';
import TechnologyIcon from '../elements/technology-icon';
import SanityImage from '../utility/SanityImage';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className='flex flex-col gap-6 sm:flex-row'>
			<Link
				href={project.url}
				target='_blank'
				rel='noopener noreferrer'
				className='relative aspect-video w-full max-w-96 shrink-0 overflow-hidden rounded-lg bg-foreground/10 sm:w-48'
			>
				<SanityImage image={project.image} className='object-cover' fill />
			</Link>
			<div className='flex flex-1 flex-col gap-3'>
				<div className='flex items-baseline justify-between gap-3'>
					<div className='flex items-baseline gap-3'>
						<Link href={project.url} target='_blank' rel='noopener noreferrer'>
							<h3 className='flex items-center gap-2 font-semibold text-lg'>
								{project.name}
								<ArrowUpRight className='h-4 w-4 text-foreground/60' />
							</h3>
						</Link>
						<span className='font-medium text-foreground/60 text-sm'>
							{project.year}
						</span>
					</div>
					{/* {project.partnerLogo && (
						<div className='relative h-6 w-20 shrink-0'>
							 <Image
											src={project.partnerLogo}
											alt='Partner'
											fill
											className='object-contain object-right'
										/> 
							<div className='h-full w-full rounded bg-foreground/10' />
						</div>
					)} */}
				</div>
				<p className='font-medium text-base text-foreground/80 leading-snug'>
					{project.description}
				</p>
				<div className='flex gap-2 text-foreground/60 transition-colors duration-1000 has-[a:hover]:text-foreground/30'>
					{project.technologies.map((tech) => (
						<TechnologyIcon
							key={tech._id}
							technology={tech}
							className='size-5 hover:text-foreground/60!'
						/>
					))}
				</div>
			</div>
		</div>
	);
}
