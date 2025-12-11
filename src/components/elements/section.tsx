import { PADDING_OPTIONS } from '@/config';
import { cn } from '@/lib/utils';
import type { BaseSectionProps } from '@/sanity/types';

export default function Section({
	children,
	className,
	type,
	id,
	sectionPadding,
}: {
	children: React.ReactNode;
	className?: string;
	type?: string;
	id?: string;
	sectionPadding?: BaseSectionProps['sectionPadding'];
}) {
	const paddingTop = sectionPadding?.paddingTop;
	const paddingBottom = sectionPadding?.paddingBottom;

	return (
		<section
			id={id}
			section-type={type}
			className={cn(
				'section',
				className,
				PADDING_OPTIONS.find((option) => option.value === paddingTop)?.className
					.top,
				PADDING_OPTIONS.find((option) => option.value === paddingBottom)
					?.className.bottom,
			)}
		>
			{children}
		</section>
	);
}
