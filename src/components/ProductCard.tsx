import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function ProductCard ({rating, hospitalName, imgSrc, onCompare}:{rating: number|undefined, hospitalName:string, imgSrc:string, onCompare:Function}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
            <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'></Image>
            </div>
            <div>
                <div className="w-full h-[30%] p-[10px]">
                    {hospitalName}
                </div>
                <Rating className="w-full h-[30%] p-[10px]" name="simple-controlled" 
                value={rating} 
                onClick={(e) => {
                    e.preventDefault(); 
                    const newvalue = parseInt(e.target.innerText.split(' ')[0]);
                    onCompare(hospitalName, newvalue);
                }}
                
                />
            </div>
        </InteractiveCard>
    )
}