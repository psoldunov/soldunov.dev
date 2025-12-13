'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SlideInDiv({
	className,
	children,
	priority = false,
}: {
	className?: string;
	children?: React.ReactNode;
	priority?: boolean;
}) {
	return (
		<motion.div
			initial={{ translateY: 20, opacity: 0 }}
			whileInView={!priority ? { translateY: 0, opacity: 1 } : undefined}
			animate={priority ? { translateY: 0, opacity: 1 } : undefined}
			viewport={!priority ? { once: true } : undefined}
			transition={{ duration: 0.5, delay: 0.1 }}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
