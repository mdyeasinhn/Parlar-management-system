'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type AuthShellProps = {
    children: ReactNode
    imageAlt: string
    imageCaption: string
    imageHeading: string
    imageSrc: string
}

export default function AuthShell({ children, imageAlt, imageCaption, imageHeading, imageSrc }: AuthShellProps) {
    return (
        <main className="min-h-screen bg-[#fffaf7] text-[#292321] lg:grid lg:grid-cols-2">
            <section className="flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-14 xl:px-20">
                <header className="mx-auto flex w-full max-w-[470px] items-center justify-between">
                    <Link href="/" className="font-serif text-lg font-semibold leading-tight text-[#292321]">
                        Jerin&apos;s <span className="font-normal text-[#a94863]">Parlour</span>
                    </Link>
                    <Link href="/" aria-label="Back to home" className="text-xs font-medium text-[#756a65] transition-colors hover:text-[#b33b65]">
                        Back to home
                    </Link>
                </header>

                <div className="relative mx-auto mt-7 aspect-[16/7] w-full max-w-[470px] overflow-hidden rounded-sm lg:hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        sizes="(max-width: 1023px) 90vw, 0px"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#37251f]/20" />
                </div>

                <div className="mx-auto flex w-full max-w-[470px] flex-1 flex-col justify-center py-10 lg:py-14">
                    {children}
                </div>

                <footer className="mx-auto w-full max-w-[470px] text-xs text-[#8b7d76]">
                    © {new Date().getFullYear()} Jerin&apos;s Parlour
                </footer>
            </section>

            <aside className="relative hidden min-h-screen overflow-hidden bg-[#6d423b] lg:block">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="50vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241714]/75 via-[#241714]/10 to-[#241714]/5" />
                <div className="absolute inset-x-0 bottom-0 p-12 text-white xl:p-16">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">A little time for you</p>
                    <h2 className="max-w-lg font-serif text-4xl font-medium leading-tight xl:text-5xl">{imageHeading}</h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/85">{imageCaption}</p>
                </div>
            </aside>
        </main>
    )
}
