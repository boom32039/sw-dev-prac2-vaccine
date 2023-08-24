import styles from './card.module.css'
import Image from 'next/image'
export default function ProductCard () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
            <Image src={'/img/vaccine.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={styles.cardText}>
                ข้อดีของการฉีดวัคซีน......
            </div>
        </div>
    )
}