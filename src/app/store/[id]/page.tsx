import { IApi } from "@/type/Type";
import Container from "@/components/Container";
import React from "react";
import AddToCart from "@/components/AddToCart";
import Image from "next/image";

interface IProductProps {
  params: Promise<{ id: string }>;
  // searchParams: Promise<{}>;
}

console.log();
async function Product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = (await result.json()) as IApi;

  return (
    <Container>
      <div className="grid  grid-cols-12 gap-2 shadow-inner border p-2 m-2 rounded text-justify ">
        <div className="col-span-9 m-2">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <div className="flex justify-evenly mt-6">
            <p> Quantity : {data.rating?.count}</p>
            <p>Price : {data.price}</p>
          </div>
        </div>
        <div className="col-span-3 m-2 flex flex-col justify-center items-center">
          {/* <img src={data.image} alt="" className="w-36" /> */}
          <Image
            src={data.image ?? '/11.jpg'}
            width={96}
            height={72}
            alt="noImage" 
          />
          <AddToCart id={id}/>
        </div>
      </div>
    </Container>
  );
}

export default Product;
