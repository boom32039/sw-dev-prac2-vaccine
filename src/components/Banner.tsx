'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner () {
    const covers =  ['/img/banner1.jpg', '/img/banner2.jpg', '/img/banner3.jpg', '/img/banner4.jpg']
    const [index, setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Vaccine</h1>
                <h3 className='text-xl font-serif'>Take care of yourself</h3>
            </div>
        </div>
    )
}