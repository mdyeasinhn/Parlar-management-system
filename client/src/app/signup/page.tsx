'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff, Globe2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import AuthShell from '@/components/auth/AuthShell'

const signupImage =
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&q=85'

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('')

    const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setMessage('Email sign-up is not connected yet. Create an account with Google or GitHub below.')
    }

    return (
        <AuthShell
            imageAlt="Beauty essentials arranged for a salon visit"
            imageCaption="Good care, thoughtful details, and a little space to feel like yourself."
            imageHeading="A little ritual, just for you."
            imageSrc={signupImage}
        >
            <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">Join the parlour</p>
                <h1 className="font-serif text-4xl font-medium leading-tight sm:text-[2.75rem]">Make yourself at home.</h1>
                <p className="mt-3 text-sm leading-6 text-[#756a65]">Create an account for a more personal Jerin&apos;s Parlour experience.</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#49403c]">Full name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="min-h-12 w-full rounded-sm border border-[#ded3ce] bg-white px-4 text-sm text-[#292321] outline-none transition placeholder:text-[#a99b95] focus:border-[#c34e71] focus:ring-2 focus:ring-[#ec4d87]/15"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#49403c]">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="min-h-12 w-full rounded-sm border border-[#ded3ce] bg-white px-4 text-sm text-[#292321] outline-none transition placeholder:text-[#a99b95] focus:border-[#c34e71] focus:ring-2 focus:ring-[#ec4d87]/15"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#49403c]">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            required
                            autoComplete="new-password"
                            placeholder="Create a password"
                            className="min-h-12 w-full rounded-sm border border-[#ded3ce] bg-white px-4 pr-12 text-sm text-[#292321] outline-none transition placeholder:text-[#a99b95] focus:border-[#c34e71] focus:ring-2 focus:ring-[#ec4d87]/15"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((visible) => !visible)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            aria-pressed={showPassword}
                            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#756a65] transition-colors hover:text-[#b33b65]"
                        >
                            {showPassword ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#ec4d87] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#d73f76] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    Create account
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
            </form>

            {message && <p role="status" className="mt-3 text-center text-xs leading-5 text-[#9f2f59]">{message}</p>}

            <div className="my-6 flex items-center gap-3 text-xs text-[#968983]">
                <span className="h-px flex-1 bg-[#e8d9d3]" />
                OR JOIN WITH
                <span className="h-px flex-1 bg-[#e8d9d3]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-[#ded3ce] bg-white px-3 text-sm font-medium text-[#49403c] transition-colors hover:bg-[#fff2ed]">
                    <Globe2 aria-hidden="true" className="h-4 w-4" /> Google
                </button>
                <button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-[#ded3ce] bg-white px-3 text-sm font-medium text-[#49403c] transition-colors hover:bg-[#fff2ed]">
                    <FaGithub aria-hidden="true" className="h-4 w-4" /> GitHub
                </button>
            </div>

            <p className="mt-7 text-center text-sm text-[#756a65]">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-[#a33e61] underline decoration-[#dba6b5] underline-offset-4 hover:text-[#ec4d87]">
                    Sign in
                </Link>
            </p>
        </AuthShell>
    )
}
