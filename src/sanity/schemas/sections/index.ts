import type { HeroSectionProps } from '@/components/sections/hero';
import heroSection, { HERO_SECTION_QUERY_PART } from './heroSection';

export type SectionProps = HeroSectionProps;

const sectionTypes = [heroSection];

export const SECTIONS_QUERY_PARTS = [HERO_SECTION_QUERY_PART];

export default sectionTypes;
