import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Provider } from 'jotai';
import grain from '@/assets/grain.png';
import Html from '@/components/layout/html';
import { sfMono, sfProDisplay } from '@/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Philipp Soldunov | React, Next.js, Expo and Sanity Developer',
	description:
		"I'm a software developer with a thing for sharp design and fast, maintainable code. I focus on full-stack Next.js apps, content-driven websites powered by Next.js and Sanity, and mobile experiences built with React and Expo. I've contributed to projects for Haartz, Learneo, Point Card (Atlas), Toca Madera, Navier, and Angry Mob Music.",
};

// https://web.archive.org/web/20211214011830/https://www.point.app/intersection

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider>
			<Html lang='en'>
				<body
					className={cn(
						'bg-(image:--bg-image) bg-size-[100px_100px] bg-repeat antialiased',
						sfProDisplay.variable,
						sfMono.variable,
					)}
					style={{ '--bg-image': `url(${grain.src})` } as React.CSSProperties}
				>
					{children}
				</body>
			</Html>
		</Provider>
	);
}
