'use client';

import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useIsClient, useIsTouchDevice } from '@/hooks';
import { cn } from '@/lib/utils';

export default function Smooth({ children }: { children: React.ReactNode }) {
	const isClient = useIsClient();
	const isTouchDevice = useIsTouchDevice();

	// Scroll progress (0 to 1) of the window
	const { scrollYProgress } = useScroll();

	// The height of the content in pixels
	const [contentHeight, setContentHeight] = useState(0);
	const [isReady, setIsReady] = useState(false);

	// A reference to hold the value of the content
	const contentRef = useRef<HTMLDivElement>(null);

	// Use Motion's useSpring() hook to smooth the scrollYProgress value
	// Increased damping and reduced stiffness to minimize bounce
	const smoothProgress = useSpring(scrollYProgress, {
		mass: 0.1,
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
		restSpeed: 0.001,
	});

	// Measure content height immediately on mount and resize
	useLayoutEffect(() => {
		if (!isClient || isTouchDevice) return;

		// Sync spring to current scroll position immediately to prevent initial bounce
		const currentProgress = scrollYProgress.get();
		smoothProgress.set(currentProgress);

		const measureHeight = () => {
			if (contentRef.current) {
				const height = contentRef.current.scrollHeight;
				setContentHeight(height);
				setIsReady(true);
			}
		};

		// Measure immediately
		measureHeight();

		// Use ResizeObserver for more accurate measurements
		const resizeObserver = new ResizeObserver(measureHeight);
		if (contentRef.current) {
			resizeObserver.observe(contentRef.current);
		}

		window.addEventListener('resize', measureHeight);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', measureHeight);
		};
	}, [isClient, isTouchDevice, scrollYProgress, smoothProgress]);

	// The value to transform the content to
	const y = useTransform(smoothProgress, (v) =>
		isReady && contentHeight > 0 && !isTouchDevice
			? v * -(contentHeight - window.innerHeight)
			: 0,
	);

	// Disable smooth scroll for touch devices - use native scrolling instead
	if (isTouchDevice) {
		return <main>{children}</main>;
	}

	return (
		<>
			{/**
			 * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
			 * Its position is fixed by default and moves when the user scrolls.
			 */}
			<motion.div
				className={cn('fixed top-0 w-full')}
				style={{ y, willChange: 'transform' }}
				ref={contentRef}
			>
				{children}
			</motion.div>
			{/**
			 * An invisible div with the actual height of the content.
			 * This will expand the height of the body and trigger the default browser scrollbar.
			 */}
			<div
				className='pointer-events-none invisible'
				style={{ height: contentHeight || '110vh' }}
			/>
		</>
	);
}
