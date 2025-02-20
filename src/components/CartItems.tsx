import { IApi } from "@/type/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
// import AddToCart from "./AddToCart";
import Image from 'next/image';

interface ICartItems {
  id: number;
  qty: number;
}

function CartItems({ id }: ICartItems) {
  const [data, setData] = useState({} as IApi);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setData(result.data);
    });
  }, []);

  console.log("test")

  return (
    <div>
      <div className="grid grid-cols-12 border ">
        <div className="col-span-9 p-6 text-right">
          <h2>{data.description}</h2>
          <p>تعداد</p>
          <h3 className="">
            <span> $قیمت محصول :{data?.price}</span>
          </h3>
          {/* <AddToCart/> */}
        </div>
        <div className="col-span-3">
          {/* <img src={data.image} alt="" className="h-48 rounded-r-md m-2" /> */}
          {
          
          <Image className="w-36 flex justify-center items-center mx-auto" src={data?.image ?? "/11.jpg"} width={48} height={48}  alt="noImage" unoptimized/>
          }
          <AddToCart id={id.toString()} />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
