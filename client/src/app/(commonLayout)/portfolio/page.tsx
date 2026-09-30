import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import bannerImage from '@/assets/images/banner_img.jpg'
import serviceImage from '@/assets/images/service_img.jpg'

export const metadata: Metadata = {
    title: "Our Portfolio | Jerin's Parlour",
    description: "Explore the beauty services and thoughtful details that shape every visit to Jerin's Parlour.",
}

const specialties = [
    {
        number: '01',
        title: 'Face treatments',
        description: 'A moment to reset, with care that leaves your skin feeling refreshed.',
    },
    {
        number: '02',
        title: 'Hair color & styling',
        description: 'A fresh color, a considered shape, and a finish that feels like you.',
    },
    {
        number: '03',
        title: 'Skin care',
        description: 'Thoughtful treatments tailored to what your skin needs today.',
    },
]

export default function PortfolioPage() {
    return (
        <main className="overflow-hidden bg-[#fffaf7] text-[#24211f]">
            <section className="relative bg-[#fff2ed]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:min-h-[610px] md:grid-cols-[1fr_0.88fr] md:gap-16 md:py-20 lg:px-12">
                    <div className="relative z-10 max-w-xl">
                        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">
                            <span className="h-px w-8 bg-[#ec4d87]" />
                            Our portfolio
                        </p>
                        <h1 className="font-serif text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
                            Beauty that feels <span className="text-[#ec4d87]">like you.</span>
                        </h1>
                        <p className="mt-7 max-w-md text-base leading-7 text-[#655b57] sm:text-lg">
                            A look at the care, craft, and little details behind a visit to Jerin&apos;s Parlour. Find the service that feels right for you.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#ec4d87] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d73f76]"
                            >
                                Plan your visit
                                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                            </Link>
                            <a href="#specialties" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f4541] hover:text-[#b33b65]">
                                Explore our services
                                <ArrowDown aria-hidden="true" className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md md:max-w-none">
                        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#ec4d87]/40 sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[3px] bg-[#f4d8d2]">
                            <Image
                                src={bannerImage}
                                alt="Beauty portrait from the Jerin's Parlour collection"
                                fill
                                priority
                                sizes="(max-width: 768px) 90vw, 42vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="absolute -bottom-4 left-4 bg-white px-4 py-3 text-xs font-medium tracking-wide text-[#5f514c] shadow-sm sm:left-7 sm:px-5">
                            The Jerin&apos;s beauty edit
                        </p>
                    </div>
                </div>
                <div className="absolute -bottom-12 -left-16 hidden h-40 w-40 rounded-full border border-[#ec4d87]/20 md:block" />
            </section>

            <section id="specialties" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
                <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">The beauty edit</p>
                        <h2 className="max-w-md font-serif text-4xl font-medium leading-tight sm:text-5xl">
                            A little time for what makes you feel good.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-7 text-[#655b57]">
                            From a skin refresh to a new style, we bring a thoughtful touch to the services our guests come in for.
                        </p>
                    </div>

                    <div className="border-t border-[#e8d9d3]">
                        {specialties.map((specialty) => (
                            <article key={specialty.number} className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-[#e8d9d3] py-6 sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:py-7">
                                <span className="pt-1 text-xs font-semibold tracking-wider text-[#b33b65]">{specialty.number}</span>
                                <div>
                                    <h3 className="text-lg font-semibold">{specialty.title}</h3>
                                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#756a65]">{specialty.description}</p>
                                </div>
                                <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 text-[#ec4d87]" strokeWidth={1.5} />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7e7e1]">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1fr] md:gap-16 md:py-20 lg:px-12">
                    <div className="relative order-2 aspect-[5/4] overflow-hidden bg-[#ead1c8] md:order-1">
                        <Image
                            src={serviceImage}
                            alt="A beauty service detail from the Jerin's Parlour collection"
                            fill
                            sizes="(max-width: 768px) 90vw, 45vw"
                            className="object-cover"
                        />
                        <span className="absolute -bottom-1 -right-1 h-20 w-20 border-b-2 border-r-2 border-[#ec4d87] sm:h-28 sm:w-28" />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">The finishing touch</p>
                        <h2 className="max-w-lg font-serif text-4xl font-medium leading-tight sm:text-5xl">
                            It&apos;s the little details that make it yours.
                        </h2>
                        <p className="mt-6 max-w-lg text-base leading-7 text-[#655b57]">
                            We take the time to understand what you want, then bring care and attention to every step. The result is a visit that feels personal from start to finish.
                        </p>
                        <Link href="/team" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9f2f59] hover:text-[#ec4d87]">
                            Meet the team
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#ec4d87] px-5 py-16 text-white sm:px-8 md:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center lg:px-4">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">A good day starts here</p>
                        <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">Ready to make time for yourself?</h2>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#9f2f59] transition-colors hover:bg-[#fff2ed]"
                    >
                        Get in touch
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    )
}
