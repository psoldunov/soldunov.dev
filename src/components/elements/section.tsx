import { cn, extractStegaValue } from '@/lib/utils';
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
	// Extract cleaned values from stega-encoded data in draft mode
	const paddingTopValue = extractStegaValue(sectionPadding?.paddingTop);
	const paddingBottomValue = extractStegaValue(sectionPadding?.paddingBottom);

	return (
		<section
			id={id}
			section-type={type}
			className={cn('section', className)}
			style={{
				paddingTop: paddingTopValue,
				paddingBottom: paddingBottomValue,
			}}
		>
			{children}
		</section>
	);
}
