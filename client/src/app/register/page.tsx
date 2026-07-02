"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
                    <p className="mt-2 text-sm text-gray-500">Register a new account</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                        <input name="name" id="name" required className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2" />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" required className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full rounded-md bg-rose-500 py-3 font-semibold text-white">
                        {loading ? "Creating..." : "Create account"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="font-medium text-rose-500 hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;