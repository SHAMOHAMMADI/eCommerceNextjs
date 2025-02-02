"use client"

import  { Cartitems, useShoppingCartContext } from '@/context/ShoppingCartContext'
import React, { useContext } from 'react'

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
          

          <button className="text-white bg-blue-700 px-6 m-2 rounded">
            خرید
          </button>
    </div>
  )
}

export default AddToCart