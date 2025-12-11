import ExperienceSectionComponent from '@/components/sections/experience-section';
import HeroSectionComponent from '@/components/sections/hero-section';

const sections = {
	heroSection: HeroSectionComponent,
	experienceSection: ExperienceSectionComponent,
};

export const dynamicSections: Array<keyof typeof sections> = [];

export default sections;
