import DateReserve from "@/components/DateReserve";
import {Select, MenuItem} from '@mui/material'
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
           <div className="my-5 text-xl font-medium">
                Booking
           </div>
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