"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ArrowRightFromLine, Flower2, LayoutDashboard, Settings2, UserRound } from "lucide-react";

const navigation = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Profile", href: "/profile", icon: UserRound },
    { label: "Settings", href: "/settings", icon: Settings2 },
];

const Sidebar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const user = session?.user;
    const initials = user?.name
        ?.split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <aside className="z-20 w-full border-b border-[#eaded8] bg-[#fffaf7] lg:sticky lg:top-0 lg:h-screen lg:w-[264px] lg:flex-none lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between px-5 py-4 lg:px-6 lg:py-7">
                <Link href="/" className="flex items-center gap-3" aria-label="Jerin's Parlour home">
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#ec4d87] text-white">
                        <Flower2 aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-lg font-semibold leading-tight text-[#292321]">
                        Jerin&apos;s <span className="font-normal text-[#a94863]">Parlour</span>
                    </span>
                </Link>
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    aria-label="Sign out"
                    title="Sign out"
                    className="flex h-10 w-10 items-center justify-center rounded-sm text-[#756a65] transition-colors hover:bg-[#fff0ea] hover:text-[#a33e61] lg:hidden"
                >
                    <ArrowRightFromLine aria-hidden="true" className="h-4 w-4" />
                </button>
            </div>

            <div className="mx-4 mb-8 hidden items-center gap-3 rounded-sm border border-[#eaded8] bg-white p-3 lg:flex">
                {user?.image ? (
                    <img src={user.image} alt="" className="h-10 w-10 rounded-full object-cover" />
                ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0ea] text-sm font-semibold text-[#a33e61]">
                        {initials || <UserRound aria-hidden="true" className="h-4 w-4" />}
                    </span>
                )}
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#292321]">{user?.name || "Your account"}</p>
                    <p className="truncate text-xs text-[#8b7d76]">{user?.email || "Signed in"}</p>
                </div>
            </div>

            <nav aria-label="Dashboard navigation" className="flex gap-2 overflow-x-auto px-4 pb-3 lg:flex-col lg:overflow-visible lg:px-3 lg:pb-0">
                {navigation.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex min-h-10 shrink-0 items-center gap-3 rounded-sm px-3 text-sm font-medium transition-colors lg:w-full ${isActive ? "bg-[#fff0ea] text-[#a33e61]" : "text-[#756a65] hover:bg-white hover:text-[#292321]"}`}
                        >
                            <Icon aria-hidden="true" className="h-4 w-4" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto hidden px-3 pb-6 lg:block">
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex min-h-10 w-full items-center gap-3 rounded-sm px-3 text-sm font-medium text-[#756a65] transition-colors hover:bg-white hover:text-[#a33e61]"
                >
                    <ArrowRightFromLine aria-hidden="true" className="h-4 w-4" />
                    Sign out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
