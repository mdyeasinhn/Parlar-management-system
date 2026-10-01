import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Create an Account | Jerin's Parlour",
    description: "Create an account for a more personal Jerin's Parlour experience.",
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return children
}