import type { SanityImageSource } from '@sanity/asset-utils';
import { blurhashToBase64 } from 'blurhash-base64';
import Image from 'next/image';
import type { ImageAsset } from 'sanity';
import { buildOptimizedImageUrl } from '@/lib/utils';
import urlFor from '@/sanity/lib/utils';
import type { SanityImageProps } from '@/sanity/types';

function isDereferencedAsset(asset: unknown): asset is ImageAsset {
	return (
		typeof asset === 'object' &&
		asset !== null &&
		'url' in asset &&
		'_type' in asset &&
		asset._type === 'sanity.imageAsset'
	);
}

export default function SanityImage({
	image,
	width,
	height,
	className,
	quality,
	priority,
	fill,
	sizes,
}: SanityImageProps) {
	const { asset } = image;
	const isDereferenced = isDereferencedAsset(asset);

	!isDereferenced &&
		console.warn(
			'SanityImage is not dereferenced, consider dereferencing the asset in your GROQ query.',
			{ reference: asset._ref },
		);

	const imageUrl = isDereferenced
		? asset.url
		: urlFor(image as SanityImageSource).url();
	const dimensions = isDereferenced ? asset.metadata.dimensions : undefined;
	const blurHash = isDereferenced ? asset.metadata.blurHash : undefined;

	return (
		<Image
			src={buildOptimizedImageUrl(imageUrl, {
				width,
				height,
			})}
			alt={image.alt || ''}
			width={width || dimensions?.width}
			height={height || dimensions?.height}
			placeholder={blurHash ? 'blur' : undefined}
			blurDataURL={blurHash ? blurhashToBase64(blurHash) : undefined}
			className={className}
			quality={quality}
			priority={priority}
			sizes={sizes}
			fill={fill}
		/>
	);
}
