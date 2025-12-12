import Link from 'next/link';
import { PortableText, type PortableTextComponents } from 'next-sanity';
import type { PortableTextBlock } from 'sanity';
import { cn } from '@/lib/utils';

const blocks: PortableTextComponents = {
	marks: {
		link: ({ children, value }) => {
			return (
				<Link
					href={value.href}
					target='_blank'
					className='text-nowrap hover:text-foreground!'
				>
					{children}
				</Link>
			);
		},
	},
};

export default function FancyPortableText({
	value,
	className,
}: {
	value: PortableTextBlock[];
	className?: string;
}) {
	return (
		<div
			className={cn(
				'group max-w-5xl font-semibold text-3xl text-foreground leading-xtight transition-colors duration-1000 has-[a:hover]:text-foreground/30 md:text-4.5xl',
				className,
			)}
		>
			<PortableText value={value} components={blocks} />
		</div>
	);
}
