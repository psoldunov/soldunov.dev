import { useEffect, useState } from 'react';

/**
 * Hook to check if the component is running on the client side
 * Returns false during SSR and until client-side hydration
 * @returns `true` if running on the client, `false` during SSR
 */
export function useIsClient(): boolean {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient;
}
