import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Settings2, UserRound } from 'lucide-react';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const initials = user?.name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

    return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <header className="flex flex-col gap-5 border-b border-[#eaded8] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b33b65]">Your account</p>
          <h1 className="font-serif text-3xl font-medium leading-tight text-[#292321] sm:text-4xl">
            Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}.
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#756a65]">Your personal space at Jerin&apos;s Parlour.</p>
        </div>
        <Link href="/" className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-[#a33e61] transition-colors hover:text-[#ec4d87] sm:self-auto">
          Visit the parlour
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </header>

      <section aria-labelledby="account-heading" className="pt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 id="account-heading" className="text-base font-semibold text-[#292321]">Account overview</h2>
          <Link href="/profile" className="inline-flex items-center gap-1 text-sm font-medium text-[#a33e61] hover:text-[#ec4d87]">
            Edit profile <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-5 border border-[#eaded8] bg-white p-5 sm:flex-row sm:items-center sm:p-7">
          {user?.image ? (
            <img src={user.image} alt="" className="h-16 w-16 rounded-full object-cover" />
          ) : (
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] font-serif text-xl font-semibold text-[#a33b65]">
              {initials || <UserRound aria-hidden="true" className="h-6 w-6" />}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9b8981]">Signed in as</p>
            <p className="mt-1 truncate text-lg font-semibold text-[#292321]">{user?.name || 'Guest account'}</p>
            <p className="mt-1 truncate text-sm text-[#756a65]">{user?.email || 'No email address available'}</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-sm bg-[#f2f7f1] px-3 py-2 text-xs font-medium text-[#527354]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6d9b68]" />
            Account active
          </span>
        </div>
      </section>

      <section aria-labelledby="shortcuts-heading" className="pt-9">
        <div className="mb-4">
          <h2 id="shortcuts-heading" className="text-base font-semibold text-[#292321]">Account shortcuts</h2>
          <p className="mt-1 text-sm text-[#756a65]">Keep your personal details and preferences up to date.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/profile" className="group flex min-h-24 items-center gap-4 border border-[#eaded8] bg-white p-5 transition-colors hover:border-[#d8a9b7] hover:bg-[#fffdfc]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#fff0ea] text-[#a33e61]">
              <UserRound aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-[#292321]">Your profile</span>
              <span className="mt-1 block text-xs text-[#8b7d76]">View and update your details</span>
            </span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#a99b95] transition-transform group-hover:translate-x-0.5 group-hover:text-[#a33e61]" />
          </Link>
          <Link href="/settings" className="group flex min-h-24 items-center gap-4 border border-[#eaded8] bg-white p-5 transition-colors hover:border-[#d8a9b7] hover:bg-[#fffdfc]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#fff0ea] text-[#a33e61]">
              <Settings2 aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-[#292321]">Settings</span>
              <span className="mt-1 block text-xs text-[#8b7d76]">Manage your account preferences</span>
            </span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#a99b95] transition-transform group-hover:translate-x-0.5 group-hover:text-[#a33e61]" />
          </Link>
        </div>
      </section>
    </main>
    );
};

export default DashboardPage;