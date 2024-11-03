import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
// import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	description:
		'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
	return (
		<div className='relative'>
			<Gradient className='absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5' />
			<Container className='relative'>
				{/* <Navbar
					banner={
						<Link
							href='/blog/radiant-raises-100m-series-a-from-tailwind-ventures'
							className='flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30'
						>
							For Technical Founders And Marketing / Growth Teams.
							<ChevronRightIcon className='size-4' />
						</Link>
					}
				/> */}
				<div className='pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32'>
					<h1 className='font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]'>
						Stop Guessing What Your Heatmaps Mean
					</h1>
					<p className='mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8'>
						AI-powered insights that boost conversion rates by 20% or more, without
						changing your existing analytics tools.
					</p>
					<div className='mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row'>
						<Button href='#'>Start Free Analysis</Button>
						<Button variant='secondary' href='/pricing'>
							Read More
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

function FeatureSection() {
	return (
		<div className='overflow-hidden'>
			<Container className='pb-24'>
				<Heading as='h2' className='max-w-3xl'>
					What You Get
				</Heading>
				<Screenshot
					width={1216}
					height={768}
					src='/screenshots/app.png'
					className='mt-16 h-[36rem] sm:h-auto sm:w-[76rem]'
				/>
			</Container>
		</div>
	)
}

function BentoSection() {
	return (
		<Container>
			<Subheading>Sales</Subheading>
			<Heading as='h3' className='mt-2 max-w-3xl'>
				Benefits
			</Heading>

			<div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2'>
				<BentoCard
					eyebrow='Insight'
					title='Connect & Go'
					description=' Keep your existing analytics tools. For now, HeatSage integrates seamlessly with PostHog, and we are working on other tools.'
					graphic={
						<div className='h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat' />
					}
					fade={['bottom']}
					className='max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl'
				/>
				<BentoCard
					eyebrow='Analysis'
					title='AI-Powered Performance Analysis'
					description='Get data-driven insights of your landing page performance. Understand exactly how visitors interact with your site, backed by real numbers, not guesswork.'
					graphic={
						<div className='absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat' />
					}
					fade={['bottom']}
					className='lg:col-span-3 lg:rounded-tr-4xl'
				/>
				<BentoCard
					eyebrow='Speed'
					title='Smart Recommendations'
					description='Transform insights into action. Receive specific, prioritized suggestions for improvements based on visitor behavior patterns and proven conversion principles.'
					graphic={
						<div className='flex size-full pl-10 pt-10'>
							<Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
						</div>
					}
					className='lg:col-span-2 lg:rounded-bl-4xl'
				/>
				<BentoCard
					eyebrow='Source'
					title='Find Quick Wins Fast'
					description='Stop spending hours analyzing heatmaps. HeatSage automatically identifies your biggest opportunities for improvement, focusing on changes that deliver the highest impact with minimal effort.'
					graphic={<LogoCluster />}
					className='lg:col-span-2'
				/>
				<BentoCard
					eyebrow='Limitless'
					title='Sell globally'
					description='Radiant helps you sell in locations currently under international embargo.'
					graphic={<Map />}
					className='max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl'
				/>
			</div>
		</Container>
	)
}

function DarkBentoSection() {
	return (
		<div className='mx-2 mt-2 rounded-4xl bg-gray-900 py-32'>
			<Container>
				<Subheading dark>Outreach</Subheading>
				<Heading as='h3' dark className='mt-2 max-w-3xl'>
					Customer outreach has never been easier.
				</Heading>

				<div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2'>
					<BentoCard
						dark
						eyebrow='Networking'
						title='Sell at the speed of light'
						description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
						graphic={
							<div className='h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat' />
						}
						fade={['top']}
						className='max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl'
					/>
					<BentoCard
						dark
						eyebrow='Integrations'
						title='Meet leads where they are'
						description='With thousands of integrations, no one will be able to escape your cold outreach.'
						graphic={<LogoTimeline />}
						// `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
						className='z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl'
					/>
					<BentoCard
						dark
						eyebrow='Meetings'
						title='Smart call scheduling'
						description="Automatically insert intro calls into your leads' calendars without their consent."
						graphic={<LinkedAvatars />}
						className='lg:col-span-2 lg:rounded-bl-4xl'
					/>
					<BentoCard
						dark
						eyebrow='Engagement'
						title='Become a thought leader'
						description='RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader.'
						graphic={
							<div className='h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat' />
						}
						fade={['top']}
						className='max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl'
					/>
				</div>
			</Container>
		</div>
	)
}

export default function Home() {
	return (
		<div className='overflow-hidden'>
			<Hero />
			<main>
				<Container className='mt-10'>
					<LogoCloud />
				</Container>
				<div className='bg-gradient-to-b from-white from-50% to-gray-100 py-32'>
					{/* <FeatureSection /> */}
					<BentoSection />
				</div>
				<DarkBentoSection />
			</main>
			<Testimonials />
			<Footer />
		</div>
	)
}
