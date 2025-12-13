import SVG from 'react-inlinesvg';
import type { SanityIconObject } from '@/sanity/types';

export default function SanityIcon({
	icon,
	className,
	width,
	height,
	style = {},
	title,
	size,
}: {
	icon: SanityIconObject;
	title?: string;
	className?: string;
	width?: number;
	height?: number;
	style?: React.CSSProperties;
	size?: number;
}) {
	return (
		<SVG
			src={icon.svg}
			title={title}
			style={style}
			className={className}
			width={width}
			height={height}
			fontSize={size}
		/>
	);
}
