"use client"


import ProductItem from '@/components/ProductItem'
import { IApi } from '@/type/Type'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FakeApi() {
    
    const [data, setData] = useState<IApi[]>([])

    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        setData(res.data)
    })
    },[])
 

 
    
  return (
    <div>

     {data.map((res)=>(
        <ProductItem key={res.id} {...res}/>
     ))

}
    </div>
)
}


export default FakeApi