import { defineLive } from 'next-sanity/live';
import { token } from '../env';
import { client } from './client';

if (!token) {
	throw new Error('Missing SANITY_API_READ_TOKEN');
}

export const { sanityFetch, SanityLive } = defineLive({
	client,
	serverToken: token,
	browserToken: token,
});
