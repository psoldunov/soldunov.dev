/**
 * Component to inject JSON-LD structured data into the page
 */
export default function JsonLd({
	data,
}: {
	data: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
	const jsonLd = Array.isArray(data) ? data : [data];

	return (
		<>
			{jsonLd.map((schema, index) => (
				<script
					key={index}
					type='application/ld+json'
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			))}
		</>
	);
}
