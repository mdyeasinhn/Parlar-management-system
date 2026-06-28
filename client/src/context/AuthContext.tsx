"use client";
import React, { createContext, useContext, useState } from "react";

type User = { name: string; email: string; avatar?: string };

interface AuthContextValue {
    user: User | null;
    login: (email: string, name?: string) => Promise<void>;
    register: (email: string, name?: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, name?: string) => {
        const displayName = name ?? email.split("@")[0];
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=F63E7B&color=fff`;
        setUser({ email, name: displayName, avatar });
    };

    const register = async (email: string, name?: string) => {
        await login(email, name);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};

export default AuthContext;
