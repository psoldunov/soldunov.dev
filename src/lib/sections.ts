import ExperienceSectionComponent from '@/components/sections/experience-section';
import HeroSectionComponent from '@/components/sections/hero-section';
import PortfolioSectionComponent from '@/components/sections/portfolio-section';

const sections = {
	heroSection: HeroSectionComponent,
	experienceSection: ExperienceSectionComponent,
	portfolioSection: PortfolioSectionComponent,
};

export const dynamicSections: Array<keyof typeof sections> = [];

export default sections;
