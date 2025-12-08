import Link from 'next/link';

export default function Experience() {
	return (
		<div>
			<h2 className='mb-3 font-semibold text-foreground/40 text-xl'>
				Experience
			</h2>
			<ul className='font-medium text-lg leading-snug transition-colors duration-1000 has-[a:hover]:text-foreground/30! [&_span]:text-foreground/60 [&_span]:transition-colors [&_span]:duration-1000 has-[a:hover]:[&_span]:text-foreground/30!'>
				<li>
					Founder, <span>TBA, 2026</span>
				</li>
				<li>
					Lead Developer,{' '}
					<span>
						<Link
							href='https://boundaryla.com'
							className='hover:text-foreground'
						>
							Boundary
						</Link>
						, 2021 - Present
					</span>
				</li>
				<li>
					Freelance Developer, <span>2020 - Present</span>
				</li>
				<li>
					Marketing Manager,{' '}
					<span>
						<Link
							href='https://boundaryla.com'
							className='hover:text-foreground'
						>
							Pandomus Group
						</Link>
						, 2018 - 2020
					</span>
				</li>
			</ul>
		</div>
	);
}
