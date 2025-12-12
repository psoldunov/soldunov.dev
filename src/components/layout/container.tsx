import { cn } from '@/lib/utils';

export default function Container({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className='px-4 sm:px-6 md:px-8 xl:px-12'>
			<div className={cn('mx-auto w-full max-w-7xl', className)}>
				{children}
			</div>
		</div>
	);
}
