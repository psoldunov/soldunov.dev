import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { cn, getTarget } from '@/lib/utils';
import type { SanityLinkType } from '@/sanity/schemas/objects/common/sanityLink';

export default function SanityLink(
	props: Omit<LinkProps, 'href'> & {
		link: SanityLinkType;
		children?: React.ReactNode;
		className?: string;
		style?: React.CSSProperties;
		disabled?: boolean;
	},
) {
	const { link, children, onClick, disabled, className, ...linkProps } = props;

	const routeSlug = link.route?.slug?.current;
	const routeParamsRaw = link.routeParams;

	const paramsPart = routeParamsRaw
		? /^[?#/&]/.test(routeParamsRaw)
			? routeParamsRaw
			: `?${routeParamsRaw}`
		: '';

	const url = link.url ?? (routeSlug ? `${routeSlug}${paramsPart}` : '#');

	return (
		<Link
			href={url}
			aria-disabled={disabled}
			target={getTarget(url)}
			className={cn(className, { 'pointer-events-none opacity-33': disabled })}
			{...linkProps}
			onClick={onClick}
		>
			{children || link.name || 'Link'}
		</Link>
	);
}
