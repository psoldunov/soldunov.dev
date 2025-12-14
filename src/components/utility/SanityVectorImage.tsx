import SVG from 'react-inlinesvg';

export default function SanityIcon({
	code,
	className,
	width,
	height,
	style = {},
	title,
	size,
}: {
	code: string;
	title?: string;
	className?: string;
	width?: number;
	height?: number;
	style?: React.CSSProperties;
	size?: number;
}) {
	return (
		<SVG
			src={code}
			title={title}
			style={style}
			className={className}
			width={width}
			height={height}
			fontSize={size}
		/>
	);
}
