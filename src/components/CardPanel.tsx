'use client'
import {useEffect, useReducer, useState} from 'react'
import ProductCard from '@/components/ProductCard'

export default function CardPanel() { 

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
                <ProductCard  hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' 
                rating={(compareMap.has('Chulalongkorn Hospital') ? compareMap.get('Chulalongkorn Hospital') : 0)} onCompare={(hospitalName:string,rate:number)=>dispatchCompare({type:'add', hospitalName:hospitalName, rate:rate})}/>
                <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' 
                rating={(compareMap.has('Rajavithi Hospital') ? compareMap.get('Rajavithi Hospital') : 0)}onCompare={(hospitalName:string,rate:number)=>dispatchCompare({type:'add', hospitalName:hospitalName, rate:rate})}/>
                <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' 
                rating={(compareMap.has('Thammasat University Hospital') ? compareMap.get('Thammasat University Hospital') : 0)}onCompare={(hospitalName:string,rate:number)=>dispatchCompare({type:'add', hospitalName:hospitalName, rate:rate})}/>
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