import Link from "next/link";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default async function HospitalCatalog({hospitalJson} : {hospitalJson:Object}) {

    const hospitalList = await hospitalJson;
    //const [rating , setRating] = useState(0);
    return (
        <>
        Explore {hospitalList.count} models in our HospitalCatalog
        <div style={ {margin:"20px", display:"flex", flexDirection:"row", alignContent:"space-around", 
        justifyContent:"space-around",flexWrap:"wrap", padding:"10px"}}>
            {
                hospitalList.data.map( (hospitalItem:Object) =>(
                    <Link href={'/hospital/' + hospitalItem.id} className='w-1/5'>
                    <ProductCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                    </Link>
                ) )
            }
        </div>
        </>
    )
}