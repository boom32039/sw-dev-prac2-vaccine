import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import {Suspense} from 'react'
import {LinearProgress} from '@mui/material'
import AddHospitalForm from "@/components/AddHospitalForm";

export default function Hospital() { 
    const hospitals = getHospitals()
    return (
        <main id='hospital-catalog'  className="text-center p-5">
            <h1 className='text-xl font-medium'>Select your favourite hospital</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
            <AddHospitalForm/>
        </main>
    )
}