import page from './documents/base/page';
import route from './documents/base/route';
import settings from './documents/base/settings';
import sanityLink from './objects/common/sanityLink';
import sections from './sections';

const baseDocuments = [page, route, settings];

const objects = [sanityLink];

export const schemaTypes = [...baseDocuments, ...objects, ...sections];
