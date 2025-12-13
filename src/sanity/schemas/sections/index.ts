import type { HeroSectionProps } from '@/components/sections/hero-section';
import experienceSection, {
	EXPERIENCE_SECTION_QUERY_PART,
	type ExperienceSectionProps,
} from './experienceSection';
import heroSection, { HERO_SECTION_QUERY_PART } from './heroSection';
import portfolioSection, {
	PORTFOLIO_SECTION_QUERY_PART,
	type PortfolioSectionProps,
} from './portfolioSection';

export type SectionProps =
	| HeroSectionProps
	| ExperienceSectionProps
	| PortfolioSectionProps;

const sectionTypes = [heroSection, experienceSection, portfolioSection];

export const SECTIONS_QUERY_PARTS = [
	HERO_SECTION_QUERY_PART,
	EXPERIENCE_SECTION_QUERY_PART,
	PORTFOLIO_SECTION_QUERY_PART,
];

export default sectionTypes;
