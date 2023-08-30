import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/banner.jpg'}
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