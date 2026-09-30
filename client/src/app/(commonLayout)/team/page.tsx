import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Heart, Scissors, Sparkles } from 'lucide-react'
import bannerImage from '@/assets/images/banner_img.jpg'
import serviceImage from '@/assets/images/service_img.jpg'

export const metadata: Metadata = {
    title: "Our Team | Jerin's Parlour",
    description: "Meet the thoughtful beauty professionals behind every visit to Jerin's Parlour.",
}

const values = [
    {
        number: '01',
        title: 'We listen first',
        description: 'Every appointment starts with your ideas, your routine, and what makes you feel like yourself.',
        icon: Heart,
    },
    {
        number: '02',
        title: 'We care about the craft',
        description: 'From the first consultation to the finishing touch, we take our time and sweat the details.',
        icon: Scissors,
    },
    {
        number: '03',
        title: 'We make room for you',
        description: 'Come as you are. Our chairs are a place to slow down, feel welcome, and leave feeling good.',
        icon: Sparkles,
    },
]

export default function TeamPage() {
    return (
        <main className="overflow-hidden bg-[#fffaf7] text-[#24211f]">
            <section className="relative bg-[#fff2ed]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:min-h-[610px] md:grid-cols-[1fr_0.88fr] md:gap-16 md:py-20 lg:px-12">
                    <div className="relative z-10 max-w-xl">
                        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">
                            <span className="h-px w-8 bg-[#ec4d87]" />
                            The people behind the glow
                        </p>
                        <h1 className="font-serif text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
                            Good beauty starts with <span className="text-[#ec4d87]">good people.</span>
                        </h1>
                        <p className="mt-7 max-w-md text-base leading-7 text-[#655b57] sm:text-lg">
                            At Jerin&apos;s Parlour, the best part of the appointment is feeling understood. We bring skill, care, and a little joy to every visit.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#ec4d87] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d73f76]"
                            >
                                Come say hello
                                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                            </Link>
                            <a href="#our-approach" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f4541] hover:text-[#b33b65]">
                                Get to know us
                                <ArrowDown aria-hidden="true" className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md md:max-w-none">
                        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#ec4d87]/40 sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[3px] bg-[#f4d8d2]">
                            <Image
                                src={bannerImage}
                                alt="A guest enjoying a beauty treatment at the salon"
                                fill
                                priority
                                sizes="(max-width: 768px) 90vw, 42vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="absolute -bottom-4 left-4 bg-white px-4 py-3 text-xs font-medium tracking-wide text-[#5f514c] shadow-sm sm:left-7 sm:px-5">
                            A little time for yourself
                        </p>
                    </div>
                </div>
                <div className="absolute -bottom-12 -left-16 hidden h-40 w-40 rounded-full border border-[#ec4d87]/20 md:block" />
            </section>

            <section id="our-approach" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20 md:py-28 lg:px-12">
                <div className="relative mx-auto w-full max-w-lg md:mx-0">
                    <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-[#f3d9d2]">
                        <Image
                            src={serviceImage}
                            alt="Beauty tools ready for a thoughtful salon appointment"
                            fill
                            sizes="(max-width: 768px) 90vw, 40vw"
                            className="object-cover"
                        />
                    </div>
                    <span className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#ec4d87] sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-28" />
                </div>

                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">A good visit is personal</p>
                    <h2 className="max-w-xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
                        More than a service. A team that sees you.
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-7 text-[#655b57]">
                        We believe great results come from good conversations and genuine care. Our team works together to make every appointment feel relaxed, considered, and completely yours.
                    </p>
                    <div className="mt-10 border-t border-[#e8d9d3]">
                        {values.map(({ number, title, description, icon: Icon }) => (
                            <article key={number} className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-[#e8d9d3] py-5 sm:grid-cols-[3rem_1fr_auto] sm:gap-5">
                                <span className="pt-1 text-xs font-semibold tracking-wider text-[#b33b65]">{number}</span>
                                <div>
                                    <h3 className="text-base font-semibold">{title}</h3>
                                    <p className="mt-1 max-w-lg text-sm leading-6 text-[#756a65]">{description}</p>
                                </div>
                                <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-[#ec4d87]" strokeWidth={1.5} />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#ec4d87] px-5 py-16 text-white sm:px-8 md:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center lg:px-4">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Your chair is waiting</p>
                        <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">Let&apos;s make your next visit a good one.</h2>
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
