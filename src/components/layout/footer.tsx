import Container from './container';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='mt-24 border-t border-t-foreground/10 border-dashed pt-12 pb-8'>
			<Container>
				<div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<p className='font-medium text-foreground/60 text-sm'>
						© {currentYear} Philipp Soldunov
					</p>
					<p className='font-medium text-foreground/60 text-sm'>
						Built with Next.js, Sanity, and Tailwind
					</p>
				</div>
			</Container>
		</footer>
	);
}
