'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SlideInDiv({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ translateY: 20, opacity: 0 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1 }}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
