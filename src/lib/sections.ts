import HeroSectionComponent from '@/components/sections/hero';

const sections = {
	heroSection: HeroSectionComponent,
};

export const dynamicSections: Array<keyof typeof sections> = [];

export default sections;
