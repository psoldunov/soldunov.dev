import { vercelStegaSplit } from '@vercel/stega';

export default function Clean({ value }: { value: string }) {
	const { cleaned, encoded } = vercelStegaSplit(value);
	return encoded ? (
		<>
			{cleaned}
			<span style={{ display: 'none' }}>{encoded}</span>
		</>
	) : (
		cleaned
	);
}
