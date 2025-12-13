import { useEffect, useState } from 'react';

/**
 * Hook to check if the device supports touch input
 * Returns false during SSR and until client-side hydration
 * @returns `true` if the device is touch-enabled, `false` otherwise
 */
export function useIsTouchDevice(): boolean {
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		// Check for touch support
		const hasTouch =
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0 ||
			// @ts-expect-error - msMaxTouchPoints is a legacy IE property
			navigator.msMaxTouchPoints > 0;

		setIsTouchDevice(hasTouch);
	}, []);

	return isTouchDevice;
}


