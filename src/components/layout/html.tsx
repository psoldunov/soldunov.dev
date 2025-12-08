'use client';

import { useAtomValue } from 'jotai';
import { themeAtom } from '@/lib/state';

export default function Html(props: React.HTMLAttributes<HTMLHtmlElement>) {
	const theme = useAtomValue(themeAtom);

	return <html {...props} data-theme={theme} />;
}
