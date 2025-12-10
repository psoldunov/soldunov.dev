import heroSection, {
	HERO_SECTION_QUERY_PART,
	type HeroSectionType,
} from './heroSection';

export type SectionType = HeroSectionType;

const sectionTypes = [heroSection];

export const SECTIONS_QUERY_PARTS = [HERO_SECTION_QUERY_PART];

export default sectionTypes;
