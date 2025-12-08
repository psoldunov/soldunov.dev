import { atomWithStorage } from 'jotai/utils';

const themeAtom = atomWithStorage<null | 'light' | 'dark'>('theme', null);

export { themeAtom };
