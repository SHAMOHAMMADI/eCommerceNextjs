"use client"
import AddToCart from "@/components/AddToCart";
import CartItems from "@/components/CartItems";
import  Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { IApi } from "@/type/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {

 const {cartItems} = useShoppingCartContext()

 const [data , setData] = useState<IApi[]>([])
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    // setData(res.data)
    const { data } = res
    setData(data)
  })
  },[])


  console.log(data)
  return (
    <Container>
      <div className=" grid h-screen my-4 gap-2">
        
    {cartItems.map((item)=>(
      
      <CartItems key={item.id} {...item}/>
      
    ))}

    
       
       
      <div className="bg-blue-100 border h-48 m-6 p-6 shadow-inner text-right">
      <h3>قیمت کل : <span >
        {
        cartItems.reduce((total , item)=>{
          const selectedProduct = data.find((product)=>product.id == item.id)
          return total + (selectedProduct?.price || 0) * item.qty
        },0)
        }</span></h3>
        <p>قیمت نهایی : <span>$65</span></p>
      </div>
      </div>
    </Container>
  );
}

export default Cart;
