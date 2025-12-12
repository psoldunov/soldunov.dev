import Link from 'next/link';
import { getTarget } from '@/lib/utils';
import type { ExperienceItem } from '@/sanity/schemas/objects/experience';

export default function Experience({
	heading,
	items,
}: {
	heading: string;
	items: ExperienceItem[];
}) {
	return (
		<div className='flex flex-col items-start'>
			{!!heading && (
				<h2 className='mb-3 font-semibold text-foreground/40 text-xl'>
					{heading}
				</h2>
			)}
			<ul className='flex flex-col items-start font-medium text-lg leading-snug transition-colors duration-1000 has-[a:hover]:text-foreground/30! [&_span]:text-foreground/60 [&_span]:transition-colors [&_span]:duration-1000 has-[a:hover]:[&_span]:text-foreground/30!'>
				{!!items?.length &&
					items.map((item) => (
						<li key={item._key}>
							{item.position},{' '}
							<span>
								{item.company &&
									(item.url ? (
										<Link
											href={item.url}
											target={getTarget(item.url)}
											className='text-nowrap hover:text-foreground'
										>
											{item.company}
										</Link>
									) : (
										<span className='text-nowrap'>{item.company}</span>
									))}
								{item.company && ', '}
								<span className='text-nowrap'>{item.dates}</span>
							</span>
						</li>
					))}
			</ul>
		</div>
	);
}
