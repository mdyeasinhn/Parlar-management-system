import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';
import React from 'react';

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
    await getServerSession(authOptions);
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default CommonLayout;