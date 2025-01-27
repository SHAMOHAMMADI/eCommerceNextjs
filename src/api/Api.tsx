"use client"


import ProductItem from '@/components/ProductItem'
import { IApi, Ijdata } from '@/type/Type'
import axios from 'axios'
import { Main } from 'next/document'
import React, { useEffect, useState } from 'react'

function FakeApi() {
    
    const [data, setData] = useState<IApi[]>([])

    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        setData(res.data)
    })
    },[])
 
    const [jdata , setJdata] = useState<Ijdata[]>([])
    useEffect(()=>{
     axios.get("http://localhost:3011/data").then((res)=>{
        setJdata(res.data)
     })
    },[])


 
    
  return (
    <div>

     {data.map((res)=>(
        <ProductItem key={res.id} {...res}/>
     ))

}  
{jdata.map((res)=>(
        <Main key={res.id} {...res}/>
    ))
}
    </div>
)
}


export default FakeApi