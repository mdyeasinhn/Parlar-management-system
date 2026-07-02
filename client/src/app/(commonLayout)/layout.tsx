import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';
import React from 'react';

const CommonLayout = async ({children} : {children: React.ReactNode}) => {
    const session = await getServerSession(authOptions);
    return (
        <div>
        <Navbar session={session}/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout;