'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react'
import AuthShell from '@/components/auth/AuthShell'

const signinImage =
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleEmailSignIn = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        setMessage('')

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!email || !password) {
            setError('Please fill in all required fields')
            return
        }

        setIsLoading(true)

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Login failed')
            }

            setMessage('Login successful! Redirecting...')
            setTimeout(() => router.push('/dashboard'), 1500)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthShell
            imageAlt="A beauty professional preparing a guest for an appointment"
            imageCaption="A familiar face, a favorite treatment, and a little time set aside just for you."
            imageHeading="Your place to pause and feel good."
            imageSrc={signinImage}
        >
            <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">Welcome back</p>
                <h1 className="font-serif text-4xl font-medium leading-tight sm:text-[2.75rem]">Good to see you again.</h1>
                <p className="mt-3 text-sm leading-6 text-[#756a65]">Sign in to continue your Jerin&apos;s Parlour experience.</p>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-5">
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
                            autoComplete="current-password"
                            placeholder="Enter your password"
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

                {error && (
                    <div className="flex items-center gap-2 text-xs text-[#9f2f59] bg-[#fdf0f4] p-3 rounded-sm">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        <span>{error}</span>
                    </div>
                )}

                <button type="submit" disabled={isLoading} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#ec4d87] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#d73f76] disabled:cursor-not-allowed disabled:opacity-70">
                    {isLoading ? 'Signing in...' : 'Continue with email'}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
            </form>

            {message && <p role="status" className="mt-3 text-center text-xs leading-5 text-[#2e7d32]">{message}</p>}

            <div className="my-6 flex items-center gap-3 text-xs text-[#968983]">
                <span className="h-px flex-1 bg-[#e8d9d3]" />
                OR SIGN IN WITH
                <span className="h-px flex-1 bg-[#e8d9d3]" />
            </div>
            <button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-sm border border-[#ded3ce] bg-white px-3 text-sm font-medium text-[#49403c] transition-colors hover:bg-[#fff2ed]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
            </button>

            <p className="mt-7 text-center text-sm text-[#756a65]">
                New to the parlour?{' '}
                <Link href="/signup" className="font-semibold text-[#a33e61] underline decoration-[#dba6b5] underline-offset-4 hover:text-[#ec4d87]">
                    Create an account
                </Link>
            </p>
        </AuthShell>
    )
}
