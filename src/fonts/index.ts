import localFont from 'next/font/local';

const sfProDisplay = localFont({
	src: [
		{
			path: './SF-Pro-Display-Thin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-ThinItalic.woff2',
			weight: '100',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Ultralight.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-UltralightItalic.woff2',
			weight: '200',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Heavy.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-HeavyItalic.woff2',
			weight: '800',
			style: 'italic',
		},
		{
			path: './SF-Pro-Display-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display-BlackItalic.woff2',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-sf-pro-display',
	display: 'swap',
});

const sfMono = localFont({
	src: [
		{
			path: './SF-Mono-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './SF-Mono-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './SF-Mono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './SF-Mono-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './SF-Mono-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './SF-Mono-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './SF-Mono-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './SF-Mono-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './SF-Mono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './SF-Mono-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './SF-Mono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './SF-Mono-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './SF-Mono-Heavy.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: './SF-Mono-HeavyItalic.woff2',
			weight: '800',
			style: 'italic',
		},
	],
	variable: '--font-sf-mono',
	display: 'swap',
});

export { sfProDisplay, sfMono };
