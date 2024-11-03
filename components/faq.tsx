import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
	{
		question: "Does it require any other analytical tools?",
		answer: "No, HeatSage works seamlessly on top of your existing analytics tools. We designed it to enhance and complement your current setup without requiring any replacements.",
	},
	{
		question: "Is it free?",
		answer: "Yes, HeatSage is currently free to use while we're in our early access phase. We believe in providing value first and getting your feedback to build the best possible product.",
	},
	{
		question: "What are the future plans?",
		answer: "Our focus is on gathering active user feedback and continuously improving the product. We're iterating based on real user needs to ensure HeatSage delivers maximum value for optimizing conversion rates.",
	}
]

export function FAQ() {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden py-32'>
				<div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
					<h2 className='text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
						Frequently asked questions
					</h2>
					<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
						{faqs.map((faq) => (
							<Disclosure key={faq.question} as='div' className='pt-6'>
								<dt>
									<DisclosureButton className='group flex w-full items-start justify-between text-left text-gray-900'>
										<span className='text-base/7 font-semibold'>{faq.question}</span>
										<span className='ml-6 flex h-7 items-center'>
											<PlusSmallIcon
												aria-hidden='true'
												className='h-6 w-6 group-data-[open]:hidden'
											/>
											<MinusSmallIcon
												aria-hidden='true'
												className='h-6 w-6 [.group:not([data-open])_&]:hidden'
											/>
										</span>
									</DisclosureButton>
								</dt>
								<DisclosurePanel as='dd' className='mt-2 pr-12'>
									<p className='text-base/7 text-gray-600'>{faq.answer}</p>
								</DisclosurePanel>
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
