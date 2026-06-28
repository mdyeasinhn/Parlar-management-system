
"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Sidebar = () => {
    const { user } = useAuth();

    return (
        <aside className="h-screen w-64 bg-white border-r px-4 py-6">
            <div className="flex items-center gap-3 mb-8">
                {user ? (
                    <>
                        <img src={user.avatar} alt="avatar" className="h-10 w-10 rounded-full" />
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