"use client"

import ProductItem from '@/components/ProductItem'
import { IApi } from '@/type/Type'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Store() {
  const [product , setProduct] = useState<IApi[]>([])


  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProduct(res.data)
     })
  },[])





  return (
    <div className="m-2 grid gap-4 grid-cols-3 ">
{product.map((res)=>(
  <Link key={res.id} href={`/store/${res.id}`}>
   <ProductItem {...res}/>
  </Link>
))}
    </div>
  )
}

export default Store