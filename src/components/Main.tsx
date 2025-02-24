import { Ijdata } from "@/type/Type";
import React from "react";
import Image from "next/image";

function Main({ image, Description, title }: Ijdata) {
  // console.log("test")

  return (
    <div className="flex flex-col border inner-shadow rounded text-justify p-2 ">
      {/* <img src={image} alt="" /> */}
      <Image
        src={image ?? "/11.jpg"}
        width={148}
        height={96}
        alt=""
        className=" flex justify-center mx-auto my-2"
      />
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        <h3>{Description}</h3>
      </div>
    </div>
  );
}

export default Main;
