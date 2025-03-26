// "use client"

import ProductItem from "@/components/ProductItem";
import { IApi } from "@/type/Type";
// import axios from 'axios'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

async function Store() {
  // const [product , setProduct] = useState<IApi[]>([])

  // useEffect(()=>{
  //    axios.get("https://fakestoreapi.com/products").then((res)=>{
  //     setProduct(res.data)
  //    })
  // },[])

  const result = await fetch(
    `https://fakestoreapi.com/products?_page=1_per_page=5`
  );
  const product = (await result.json()) as IApi[];
  return (
    <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-36 ">
      {product.map((res) => (
        <div key={res.id}>
          <ProductItem {...res} />
        </div>
      ))}
    </div>
  );
}

export default Store;
