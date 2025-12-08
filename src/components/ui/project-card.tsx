import { ArrowUpRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';

export default function ProjectCard({
	project,
}: {
	project: {
		name: string;
		year: string;
		description: string;
		image: StaticImageData;
		url: string;
		technologies: IconType[];
		partnerLogo?: StaticImageData;
	};
}) {
	return (
		<Link
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			key={project.name}
			className='flex gap-6'
		>
			<div className='relative aspect-video w-48 shrink-0 overflow-hidden rounded-lg bg-foreground/10'>
				{/* Uncomment when you have images */}
				{/* <Image
								src={project.image}
								alt={project.name}
								fill
								className='object-cover'
							/> */}
			</div>
			<div className='flex flex-1 flex-col gap-3'>
				<div className='flex items-baseline justify-between gap-3'>
					<div className='flex items-baseline gap-3'>
						<h3 className='flex items-center gap-2 font-semibold text-lg'>
							{project.name}
							<ArrowUpRight className='h-4 w-4 text-foreground/60' />
						</h3>
						<span className='font-medium text-foreground/60 text-sm'>
							{project.year}
						</span>
					</div>
					{project.partnerLogo && (
						<div className='relative h-6 w-20 shrink-0'>
							{/* Uncomment when you have partner logos */}
							{/* <Image
											src={project.partnerLogo}
											alt='Partner'
											fill
											className='object-contain object-right'
										/> */}
							<div className='h-full w-full rounded bg-foreground/10' />
						</div>
					)}
				</div>
				<p className='font-medium text-base text-foreground/80 leading-snug'>
					{project.description}
				</p>
				<div className='flex gap-2.5'>
					{project.technologies.map((Icon, index) => (
						<Icon key={index} className='h-5 w-5 text-foreground/60' />
					))}
				</div>
			</div>
		</Link>
	);
}
