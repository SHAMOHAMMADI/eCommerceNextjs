import { IApi } from "@/type/Type";
import Image from "next/image";
import React from "react";

function ProductItem({image , price, category, title }: IApi) {
  return (
    <div className="border shadow-inner h-96 flex flex-col items-center">
      {/* <img src={image} alt="" className="w-48 h-52 m-4" /> */}
      <Image 
       src={image ?? "/11.jpg"} 
       width={72}
       height={72}
       alt="noImage"
       unoptimized
      />
     
      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>

      <button className="w-9/12  h-8 items-center flex justify-center rounded text-white bg-[#0000ff]">
        خرید
      </button>
    </div>
  );
}

export default ProductItem;
