import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Technology } from '@/sanity/schemas/documents/technology';
import SanityIcon from '../utility/SanityIcon';

export default function TechnologyIcon({
	technology,
	className,
}: {
	technology: Technology;
	className?: string;
}) {
	if (technology.url) {
		return (
			<Link
				key={technology._id}
				href={technology.url}
				target='_blank'
				rel='noopener noreferrer'
				className={cn(className)}
				aria-label={technology.name}
			>
				<SanityIcon
					icon={technology.icon}
					className='size-full'
					title={technology.name}
				/>
			</Link>
		);
	}
	return (
		<SanityIcon
			icon={technology.icon}
			className={cn(className, 'hover:text-inherit!')}
			title={technology.name}
		/>
	);
}
