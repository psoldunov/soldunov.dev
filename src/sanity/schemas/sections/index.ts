import type { HeroSectionProps } from '@/components/sections/hero-section';
import experienceSection, {
	EXPERIENCE_SECTION_QUERY_PART,
	type ExperienceSectionProps,
} from './experienceSection';
import heroSection, { HERO_SECTION_QUERY_PART } from './heroSection';

export type SectionProps = HeroSectionProps | ExperienceSectionProps;

const sectionTypes = [heroSection, experienceSection];

export const SECTIONS_QUERY_PARTS = [
	HERO_SECTION_QUERY_PART,
	EXPERIENCE_SECTION_QUERY_PART,
];

export default sectionTypes;
