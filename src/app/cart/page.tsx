"use client"
import AddToCart from "@/components/AddToCart";
import CartItems from "@/components/CartItems";
import  Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import React from "react";

function Cart() {

 const {cartItems} = useShoppingCartContext()
  return (
    <Container>
      <div className=" grid h-screen my-4 gap-2">
        
    {cartItems.map((item)=>(
      
      <CartItems key={item.id} {...item}/>
      
    ))}
       
       
      <div className="bg-blue-100 border h-48 m-6 p-6 shadow-inner text-right">
      <h3>قیمت کل : <span >$45</span></h3>
        <p>قیمت نهایی : <span>$65</span></p>
      </div>
      </div>
    </Container>
  );
}

export default Cart;
