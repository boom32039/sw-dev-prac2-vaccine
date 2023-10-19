import Image from 'next/image'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from  '@mui/material'; 
export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='flex flex-wrap bg-slate-50  border-gray-200 dark:bg-gray-900'>
            <div >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {session? <Link href='/api/auth/signout'>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sign-Out</span>
                    </Link> :
                    <Link href='/api/auth/signin'>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sign-In</span>
                    </Link>
                    }
                </div>
            </div>
            
            <div className="flex flex-wrap ms-auto my-auto" id="navbar-default">
                <div className="my-auto">
                    <a href="booking" className="text-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Booking
                    </a>
                </div>
                <div className="mx-10">
                    <Image className="rounded-full" height={100} width={40} src='/img/medical-5459653_1280.png'alt='cover' 
                            objectFit='cover'/>
                </div>
                
            </div>

        </div>
    );
}