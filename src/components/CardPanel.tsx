'use client'
import {useEffect, useReducer, useState} from 'react'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default function CardPanel() { 

    const mockHospital = [{'hid':'001', 'hospitalName' : 'Chulalongkorn Hospital', 'imgSrc': '/img/chula.jpg'},
    {'hid':'002', 'hospitalName' : 'Rajavithi Hospital', 'imgSrc': '/img/rajavithi.jpg'},
    {'hid':'003', 'hospitalName' : 'Thammasat University Hospital', 'imgSrc': '/img/thammasat.jpg'}]

    const compareReducer = (compareMap:Map<string,number>, action:{type:string, hospitalName:string, rate:number}) =>{
        switch(action.type){
            case 'add' : {
                compareMap.set(action.hospitalName, action.rate)
                return new Map(compareMap)
            }case 'remove' : {
                compareMap.delete(action.hospitalName)
                
                return new Map(compareMap)
            }
            default : return compareMap
        }
    }
    
    const [compareMap, dispatchCompare] = useReducer(compareReducer, new Map<string,number>())
    
    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row"
            , justifyContent:"space-around",flexWrap:"wrap",alignContent:"space-around"}}>
                {mockHospital.map((hospitalItem)=>(
                    <Link href={'/hospital/' + hospitalItem.hid} className='w-[350px]'>
                        <ProductCard hospitalName={hospitalItem.hospitalName} imgSrc={hospitalItem.imgSrc} 
                        onCompare={(hospitalName:string,rate:number)=>dispatchCompare({type:'add', hospitalName:hospitalName, rate:rate})}
                        rating={(compareMap.has(hospitalItem.hospitalName) ? compareMap.get(hospitalItem.hospitalName) : 0)}
                        />
                    </Link>
                    )
                )}
            </div>
            <div className='w-full text-xl font-medium'>Compare</div>
            {Array.from(compareMap).map((obj) => 
                <div  onClick={() => {
                    dispatchCompare({ type: 'remove', hospitalName: obj[0], rate: obj[1] });
                } }>
                {obj[0] + ' ' + obj[1]}</div>)}
            </div>
    )
}