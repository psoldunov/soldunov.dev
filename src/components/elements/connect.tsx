import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const socials = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/psoldunov',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/psoldunov',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/psoldunov',
	},
	{
		name: 'Email',
		url: 'mailto:philipp@soldunov.dev',
	},
];

export default function Connect() {
	return (
		<div>
			<h2 className='mb-3 font-semibold text-foreground/40 text-xl'>Connect</h2>
			<ul className='font-semibold text-lg leading-snug transition-colors duration-1000 has-[a:hover]:text-foreground/30'>
				{socials.map((social) => (
					<li key={social.name}>
						<Link
							href={social.url}
							target='_blank'
							className='inline-flex items-center gap-2 hover:text-foreground!'
						>
							{social.name}
							<ArrowUpRight className='h-4 w-4' />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
