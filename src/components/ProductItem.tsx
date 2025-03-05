import { IApi } from "@/type/Type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ id, image, price, category, title }: IApi) {
  return (
    <div className="border shadow-inner py-4 my-4 flex h-full flex-col items-center justify-center">
      {/* <img src={image} alt="" className="w-48 h-52 m-4" /> */}
      <Image
        src={image ?? "/11.jpg"}
        width={36}
        height={36}
        alt="noImage"
        className="w-48 h-64 "
        unoptimized
      />

      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>

      <Link href={`/store/${id}`}>
        <button className="w-full  px-36 h-8 items-center flex justify-center rounded text-white bg-[#0000ff]">
          خرید
        </button>
      </Link>
    </div>
  );
}

export default ProductItem;
