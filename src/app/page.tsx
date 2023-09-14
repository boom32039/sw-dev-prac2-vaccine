import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard  from '@/components/ProductCard'
import CardPanel from '@/components/CardPanel'

export default function Home() {
  return (
    <div>
      <Banner/> 
      <CardPanel/>
        {/* <ProductCard hospitalName='Chulalongkorn Hospital'imgSrc='/img/chula.jpg'/>
        <ProductCard hospitalName='Rajavithi Hospital'imgSrc='/img/rajavithi.jpg'/>
        <ProductCard hospitalName='Thammasat University Hospital'imgSrc='/img/thammasat.jpg'/> */}
    </div>
  )
}
