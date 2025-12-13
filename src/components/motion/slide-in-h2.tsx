'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SlideInH2({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<motion.h2
			initial={{ translateY: 20, opacity: 0 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1 }}
			className={cn(className)}
		>
			{children}
		</motion.h2>
	);
}
