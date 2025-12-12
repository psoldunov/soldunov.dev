import page from './documents/base/page';
import route from './documents/base/route';
import settings from './documents/base/settings';
import project from './documents/project';
import technology from './documents/technology';
import sanityLink from './objects/common/sanityLink';
import experience from './objects/experience';
import sections from './sections';

const baseDocuments = [page, route, settings];

const documents = [project, technology];

const objects = [sanityLink, experience];

export const schemaTypes = [
	...baseDocuments,
	...documents,
	...objects,
	...sections,
];
