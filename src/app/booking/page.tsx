import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {getServerSession } from 'next-auth';
import getUserProfile  from '@/libs/getUserProfile';
import VaccineBookingForm from "@/components/VaccineBookingForm";

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
           <div className="my-5 text-xl font-medium">
                Booking
           </div>
           <div>
            <table className='bg-slate-100 rounded-lg table-auto border-separate border-spacing-2'>
                <tbody>
                    <tr><td>Name</td><td>{profile.data.name}</td></tr>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
            <VaccineBookingForm/>
           </div>
        </main>
    );
}