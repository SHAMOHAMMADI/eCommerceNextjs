import { IApi } from "@/type/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import AddToCart from "./AddToCart";

interface ICartItems {
  id : number ,
  qty : number
}



function CartItems({id , qty}:ICartItems) {

const [data , setData] = useState({} as IApi)


 useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
    setData(result.data)
  })

 },[])


  return (
    <div>
      <div className="grid grid-cols-12 border ">
        <div className="col-span-9 p-6 text-right">
          <h2>{data.description}</h2>
          <p>تعداد</p>
          <h3 className="">
          <span> $قیمت محصول : 45</span>
          </h3>
          {/* <AddToCart/> */}
        </div>
        <div className="col-span-3">
          <img 
          className="h-48 rounded-r-md"
            src={data.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
