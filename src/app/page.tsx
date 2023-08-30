import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard  from '@/components/ProductCard'

export default function Home() {
  return (
    <div>
      <Banner/> 
      <div style={{margin:"20px", display:"flex", flexDirection:"row"
      , justifyContent:"space-around",flexWrap:"wrap",alignContent:"space-around"}}>
        <ProductCard hospitalName='Chulalongkorn Hospital'imgSrc='/img/chula.jpg'/>
        <ProductCard hospitalName='Rajavithi Hospital'imgSrc='/img/rajavithi.jpg'/>
        <ProductCard hospitalName='Thammasat University Hospital'imgSrc='/img/thammasat.jpg'/>
      </div>
    </div>
  )
}
