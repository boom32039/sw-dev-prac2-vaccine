import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProductCard ({hospitalName, imgSrc, onCompare}:{hospitalName:string, imgSrc:string, onCompare?:Function}) {
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
            </div>
        </InteractiveCard>
    )
}