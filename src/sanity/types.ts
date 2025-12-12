import type { SanityReference } from 'next-sanity';
import type { ImageAsset, ImageCrop, ImageHotspot } from 'sanity';

export type BaseSectionProps = {
	_type: string;
	_key?: string;
	searchParams?: { [key: string]: string | string[] | undefined };
	sectionId?: string;
	hidden?: boolean;
	sectionPadding?: {
		paddingTop?: string;
		paddingBottom?: string;
	};
};

export type SanityImageProps = {
	image: SanityImageObject;
	width?: number;
	height?: number;
	className?: string;
	quality?: number;
	priority?: boolean;
	fill?: boolean;
	sizes?: string;
};

export type SanityImageObject = {
	asset: SanityReference | ImageAsset;
	alt?: string;
	caption?: string;
	crop?: ImageCrop;
	hotspot?: ImageHotspot;
};

export type SanityFile = {
	asset: SanityReference;
	_type: 'file';
};

export type SanityColor = {
	_type: 'color';
	alpha: number;
	hex: string;
	hsl: {
		_type: 'hslaColor';
		a: number;
		h: number;
		l: number;
		s: number;
	};
	hsv: {
		_type: 'hsvaColor';
		a: number;
		h: number;
		s: number;
		v: number;
	};
	rgb: {
		_type: 'rgbaColor';
		a: number;
		b: number;
		g: number;
		r: number;
	};
};
