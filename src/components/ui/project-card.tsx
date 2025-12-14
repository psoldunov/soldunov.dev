import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/sanity/schemas/documents/project';
import SanityIcon from '../utility/SanityIcon';
import SanityVectorImage from '../utility/SanityVectorImage';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className='flex flex-col gap-6 sm:flex-row'>
			<div className='flex flex-1 flex-col gap-3'>
				<div className='flex flex-col flex-wrap gap-x-3 gap-y-2 sm:flex-row sm:items-center sm:justify-between'>
					<div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
						<Link
							href={project.url}
							target='_blank'
							className='group'
							rel='noopener noreferrer'
						>
							<h3 className='flex flex-nowrap items-center gap-1 font-semibold text-lg'>
								{project.name}
								<ArrowUpRight
									className='group-hover:-translate-y-1 h-4 w-4 text-foreground/60 transition-transform duration-1000 group-hover:translate-x-1'
									aria-hidden='true'
								/>
							</h3>
						</Link>
						<span className='font-medium text-foreground/60 text-sm'>
							{project.year}
						</span>
					</div>
					{project.partner && (
						<div className='flex items-center gap-1 self-end text-foreground/60 text-sm sm:self-auto'>
							design by
							<Link
								href={project.partner.link}
								target='_blank'
								aria-label={project.partner.name}
								rel='noopener noreferrer'
								className='relative h-6 w-20 shrink-0 transition-colors duration-500 hover:text-foreground'
							>
								<SanityVectorImage
									code={project.partner.logo.code}
									title={project.partner.name}
									className='size-full'
								/>
							</Link>
						</div>
					)}
				</div>
				<p className='font-medium text-base text-foreground/80 leading-snug md:max-w-3xl'>
					{project.description}
				</p>
				<div className='group flex flex-wrap gap-2 self-start'>
					{project.technologies.map((tech) => {
						if (!tech.url) {
							return (
								<div
									key={tech._id}
									className='flex items-center gap-2 rounded-sm bg-foreground/10 px-2 py-1 font-semibold text-foreground/60 text-xs transition-all duration-1000 hover:opacity-100 group-hover:opacity-33'
								>
									<SanityIcon icon={tech.icon} className='size-3' />
									{tech.name}
								</div>
							);
						}

						return (
							<Link
								key={tech._id}
								href={tech.url}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2 rounded-sm bg-foreground/10 px-2 py-1 font-semibold text-foreground/60 text-xs transition-all duration-1000 hover:text-foreground hover:opacity-100 group-hover:opacity-33'
							>
								<SanityIcon icon={tech.icon} className='size-3' />
								{tech.name}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
