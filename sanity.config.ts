import { iconPicker } from '@psoldunov/sanity-plugin-icon-picker';
import { codeInput } from '@sanity/code-input';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import {
	CodeXmlIcon,
	CpuIcon,
	Settings,
	StickyNote,
	UserIcon,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { RiRouteLine } from 'react-icons/ri';
import { defineConfig, type SchemaTypeDefinition } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { type StructureBuilder, structureTool } from 'sanity/structure';
import StudioIcon from '@/sanity/components/studio-icon';
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { resolve } from '@/sanity/lib/resolve';
import { schemaTypes } from '@/sanity/schemas';

const readOnlyTypes = new Set<string>([]);

const singletonTypes = new Set<string>(['settings']);

const singletonActions = new Set<string>([
	'publish',
	'discardChanges',
	'restore',
]);

const readOnlyActions = new Set<string>(['delete']);

const singletonListItem = ({
	S,
	schemaType,
	title,
	icon,
}: {
	S: StructureBuilder;
	schemaType: string;
	title?: string;
	icon?: ComponentType;
}) =>
	S.listItem()
		.title(title || schemaType)
		.id(schemaType)
		.icon(icon || undefined)
		.child(
			S.document()
				.title(title || schemaType)
				.schemaType(schemaType)
				.id(schemaType),
		);

export default defineConfig({
	name: 'default',
	title: 'soldunov.dev',
	icon: StudioIcon,
	basePath: '/admin',
	projectId,
	dataset,
	apiVersion,
	ignoreBrowserTokenWarning: true,
	plugins: [
		codeInput(),
		iconPicker(),
		structureTool({
			structure: (S, context) => {
				return S.list()
					.title('Sanity Dashboard')
					.items([
						singletonListItem({
							S,
							schemaType: 'settings',
							title: 'Settings',
							icon: Settings,
						}),
						S.divider(),
						orderableDocumentListDeskItem({
							title: 'Pages',
							type: 'page',
							icon: StickyNote,
							S,
							context,
						}),
						orderableDocumentListDeskItem({
							title: 'Routes',
							type: 'route',
							icon: RiRouteLine,
							S,
							context,
						}),
						S.divider(),
						orderableDocumentListDeskItem({
							title: 'Projects',
							type: 'project',
							icon: CodeXmlIcon,
							S,
							context,
						}),
						orderableDocumentListDeskItem({
							title: 'Technologies',
							type: 'technology',
							icon: CpuIcon,
							S,
							context,
						}),
						orderableDocumentListDeskItem({
							title: 'Partners',
							type: 'partner',
							icon: UserIcon,
							S,
							context,
						}),
					]);
			},
		}),
		presentationTool({
			title: 'Live Editing',
			resolve,
			previewUrl: {
				previewMode: {
					enable: '/api/draft-mode/enable',
				},
			},
		}),
	],

	schema: {
		types: schemaTypes as SchemaTypeDefinition[],
		templates: (templates) =>
			templates.filter(
				({ schemaType }) =>
					!singletonTypes.has(schemaType) && !readOnlyTypes.has(schemaType),
			),
	},

	document: {
		actions: (input, context) => {
			if (singletonTypes.has(context.schemaType)) {
				return input.filter(
					({ action }) => action && singletonActions.has(action),
				);
			}
			if (readOnlyTypes.has(context.schemaType)) {
				return input.filter(
					({ action }) => action && readOnlyActions.has(action),
				);
			}
			return input;
		},
	},
});
