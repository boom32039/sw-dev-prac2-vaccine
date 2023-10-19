import DateReserve from "@/components/DateReserve";
import {Select, MenuItem} from '@mui/material';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {getServerSession } from 'next-auth';
import getUserProfile  from '@/libs/getUserProfile';

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
           <table className='bg-slate-100 rounded-lg table-auto border-separate border-spacing-2'>
            <tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody>
           </table>
           <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    First Name
                </div>
                <input type="text" id="first_name" placeholder="First Name"
                className="rounded ring-1 ring-inset ring-gray-400
                text-md leading-6 indent-2"/>
                <div className="text-md text-left text-gray-600">
                    Last Name
                </div>
                <input type="text" id="last_name" placeholder="Last Name"
                className="rounded ring-1 ring-inset ring-gray-400
                text-md leading-6 indent-2"/>
                <div className="text-md text-left text-gray-600">
                    Citizen ID
                </div>
                <input type="text" id="citizen_id" placeholder="Citizen ID"
                className="rounded ring-1 ring-inset ring-gray-400
                text-md leading-6 indent-2"/>
                <div className="text-md text-left text-gray-600">
                    Hospital
                </div>
                <Select variant="standard" name="hospital"
                id="hospital" className="w-2/4 h-[2em]">
                    <MenuItem value="Chulalongkorn">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
                <div className="text-md text-left text-gray-600">
                    Pick Date
                </div>
                <DateReserve/>
           </div>
        </main>
    );
}