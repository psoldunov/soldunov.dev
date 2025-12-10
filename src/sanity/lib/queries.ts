import { defineQuery } from 'next-sanity';
import { SECTIONS_QUERY_PARTS } from '@/sanity/schemas/sections';

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{
  ...,
}`);

export const ROUTES_QUERY = defineQuery(`*[_type == "route"]`);

export const ROUTE_QUERY =
	defineQuery(`*[_type == "route" && slug.current == $slug][0]{
  ...,
  page-> {
    ...,
    sections[] {
      ${SECTIONS_QUERY_PARTS.join(',\n')}
    }
  }
}`);
