import { ArrowUpRight } from 'lucide-react';
import type { SanityLinkType } from '@/sanity/schemas/objects/common/sanityLink';
import SanityLink from '../utility/SanityLink';

export default function Connect({
	heading,
	items,
}: {
	heading?: string;
	items?: SanityLinkType[];
}) {
	return (
		<div className='flex flex-col items-start'>
			{!!heading && (
				<h2 className='mb-3 font-semibold text-foreground/50 text-xl'>
					{heading}
				</h2>
			)}
			<ul className='flex flex-col items-start font-semibold text-lg leading-snug transition-colors duration-1000 has-[a:hover]:text-foreground/30'>
				{!!items?.length &&
					items.map((item) => (
						<li key={item._key}>
							<SanityLink
								link={item}
								className='inline-flex items-center gap-2 hover:text-foreground!'
							>
								{item.name}
								<ArrowUpRight className='h-4 w-4' />
							</SanityLink>
						</li>
					))}
			</ul>
		</div>
	);
}
