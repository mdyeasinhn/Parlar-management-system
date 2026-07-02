import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';


const DashboardPage = async() => {
    const session= await getServerSession(authOptions);
    console.log(session)
    return (
        <div>
           {session?.user && (
            <div>
              <h1>welcome {session.user.name} </h1>
              <h1>Logged-in user Email: {session.user.email}</h1>
              <Image
                src={session.user.image as string}
                alt="User Image"
                width={100}
                height={100}
              />
            </div>
           )}
        </div>
    );
};

export default DashboardPage;