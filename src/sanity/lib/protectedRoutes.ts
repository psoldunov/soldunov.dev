export const PROTECTED_ROUTE_PATTERNS = ['/api/*', '/admin/*'];

export function isProtectedRoute(slug: string): boolean {
	return PROTECTED_ROUTE_PATTERNS.some((pattern) => {
		const patternPrefix = pattern.replace('/*', '');
		return slug.startsWith(patternPrefix);
	});
}

export function getProtectedRouteError(slug: string): string {
	const conflictingPattern = PROTECTED_ROUTE_PATTERNS.find((pattern) => {
		const patternPrefix = pattern.replace('/*', '');
		return slug.startsWith(patternPrefix);
	});

	if (conflictingPattern) {
		return `Route cannot start with "${conflictingPattern.replace('/*', '')}" as this path is protected`;
	}

	return 'This route conflicts with a protected path';
}
