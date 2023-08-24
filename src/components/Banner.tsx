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
                <h1>ร่วมฉีดวัคซีน</h1>
                <h3>ป้องกันโรคภัยไข้เจ็บ</h3>
            </div>
        </div>
    )
}