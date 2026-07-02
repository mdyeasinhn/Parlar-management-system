"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = () => {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <aside className="h-screen w-64 bg-white border-r px-4 py-6">
            <div className="flex items-center gap-3 mb-8">
                {user ? (
                    <>
                        <img src={user.image ?? '/images/avatar.jpg'} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
                        <div>
                            <div className="text-sm font-medium">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                        </div>
                    </>
                ) : (
                    <div className="text-sm text-gray-600">Not signed in</div>
                )}
            </div>

            <nav className="flex flex-col space-y-1">
                <Link href="/dashboard" className="px-3 py-2 rounded hover:bg-gray-50">Dashboard</Link>
                <Link href="/profile" className="px-3 py-2 rounded hover:bg-gray-50">Profile</Link>
                <Link href="/settings" className="px-3 py-2 rounded hover:bg-gray-50">Settings</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
