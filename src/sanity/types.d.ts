import type {
	SanityImageObject,
	SanityReference,
} from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
	asset: {
		metadata: {
			blurHash?: string;
		};
	};
	alt?: string;
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
