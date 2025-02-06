"use client"

import  { useShoppingCartContext } from '@/context/ShoppingCartContext'
import React from 'react'

interface  IAddToCart {
    id: string 
}
function AddToCart({id}:IAddToCart) {
    const {cartItems , handleIncreaseProductQty,getProductQty} = useShoppingCartContext()

    console.log(cartItems)
  return (
    <div>
             <div className="flex ">
            <button onClick={()=>handleIncreaseProductQty(parseInt(id))} className="text-white bg-blue-700 px-6 m-2 rounded">
              +
            </button>
             {getProductQty(parseInt(id))}
            <button className="text-white bg-blue-700 px-6 m-2 rounded">
              -
            </button>
          </div>
          <span className = "mx-4">{getProductQty(parseInt(id))}</span>
          <button className="text-white bg-blue-700 px-6 m-2 rounded">
            خرید
          </button>
    </div>
  )
}

export default AddToCart