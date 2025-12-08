import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/assets/avatar.jpeg';
import SlideInParagraph from '../elements/slide-in-paragraph';
import Container from '../layout/container';
import AvatarInteraction from '../ui/avatar-interaction';

export default function HeroSection() {
	return (
		<section className='pt-32'>
			<Container>
				<AvatarInteraction className='mb-8 max-w-30'>
					<Image
						alt='howdy'
						src={avatar}
						placeholder='blur'
						className='aspect-square w-full rounded-full object-cover'
					/>
				</AvatarInteraction>
				<h1 className='font-semibold text-4.5xl text-foreground/40'>
					Philipp Soldunov
				</h1>
				<SlideInParagraph className='group max-w-5xl font-semibold text-4.5xl text-foreground leading-xtight transition-colors duration-1000 has-[a:hover]:text-foreground/30'>
					I'm a software developer with a thing for sharp design and fast,
					maintainable code. I focus on full-stack{' '}
					<Link
						target='_blank'
						href='https://nextjs.org'
						className='text-nowrap hover:text-foreground!'
					>
						Next.js
					</Link>{' '}
					apps, content-driven websites powered by{' '}
					<Link
						target='_blank'
						href='https://nextjs.org'
						className='text-nowrap hover:text-foreground!'
					>
						Next.js
					</Link>{' '}
					and{' '}
					<Link
						target='_blank'
						href='https://www.sanity.io'
						className='text-nowrap hover:text-foreground!'
					>
						Sanity
					</Link>
					, and mobile experiences built with{' '}
					<Link
						target='_blank'
						href='https://reactjs.org'
						className='text-nowrap hover:text-foreground!'
					>
						React
					</Link>{' '}
					and{' '}
					<Link
						target='_blank'
						href='https://expo.dev'
						className='text-nowrap hover:text-foreground!'
					>
						Expo
					</Link>
					. I've contributed to projects for{' '}
					<Link
						target='_blank'
						href='https://haartz.com'
						className='text-nowrap hover:text-foreground!'
					>
						Haartz
					</Link>
					,{' '}
					<Link
						target='_blank'
						href='https://learneo.com'
						className='text-nowrap hover:text-foreground!'
					>
						Learneo
					</Link>
					,{' '}
					<Link
						target='_blank'
						href='https://point.app'
						className='text-nowrap hover:text-foreground!'
					>
						Point Card (Atlas)
					</Link>
					,{' '}
					<Link
						target='_blank'
						href='https://tocamadera.com'
						className='text-nowrap hover:text-foreground!'
					>
						Toca Madera
					</Link>
					,{' '}
					<Link
						target='_blank'
						href='https://navierboat.com'
						className='text-nowrap hover:text-foreground!'
					>
						Navier
					</Link>
					, and{' '}
					<Link
						target='_blank'
						href='https://angrymobmusic.com'
						className='text-nowrap hover:text-foreground!'
					>
						Angry Mob Music
					</Link>
					.
				</SlideInParagraph>
			</Container>
		</section>
	);
}
3;
