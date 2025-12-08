'use client';

import { motion, useMotionTemplate, useSpring } from 'motion/react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AvatarInteractionProps {
	children: React.ReactNode;
	className?: string;
	maxTilt?: number;
}

export default function AvatarInteraction({
	children,
	className,
	maxTilt = 15,
}: AvatarInteractionProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const z = useSpring(0);
	const rotateX = useSpring(0);
	const rotateY = useSpring(0);
	const scale = useSpring(1);
	const glareX = useSpring(50);
	const glareY = useSpring(50);
	const [isHovered, setIsHovered] = useState(false);

	const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 70%)`;

	const calculateTilt = (event: React.PointerEvent<HTMLDivElement>) => {
		if (!cardRef.current) return { rotateX: 0, rotateY: 0 };

		const rect = cardRef.current.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		// Convert coordinates to percentages
		const xPercent = x / rect.width;
		const yPercent = y / rect.height;

		return {
			rotateX: maxTilt * (0.5 - yPercent),
			rotateY: maxTilt * (xPercent - 0.5),
		};
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const tilt = calculateTilt(e);
		rotateX.set(tilt.rotateX);
		rotateY.set(tilt.rotateY);

		const rect = cardRef.current.getBoundingClientRect();
		const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
		const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
		glareX.set(xPercent);
		glareY.set(yPercent);
	};

	const handlePointerLeave = () => {
		rotateX.set(0);
		rotateY.set(0);
		z.set(0);
		scale.set(1);
		glareX.set(50);
		glareY.set(50);
		setIsHovered(false);
	};

	const handlePointerEnter = () => {
		z.set(-10);
		scale.set(1.5);
		setIsHovered(true);
	};

	return (
		<motion.div
			ref={cardRef}
			className={cn('cursor-none overflow-hidden rounded-full', className)}
			style={{
				transformPerspective: '500px',
				z,
				rotateX,
				rotateY,
				scale,
			}}
			transition={{ type: 'spring', stiffness: 200, damping: 20 }}
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			onPointerEnter={handlePointerEnter}
		>
			{children}
			{isHovered && (
				<motion.div
					className='pointer-events-none absolute inset-0'
					style={{
						background: glareBackground,
					}}
				/>
			)}
		</motion.div>
	);
}
