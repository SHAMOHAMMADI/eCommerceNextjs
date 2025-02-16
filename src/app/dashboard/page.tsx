"use client";
import axios from "axios";
import Container from "../../components/Container";
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  
  
  
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    console.log(newProduct);
    axios({
        method:"POST",
        url:"http://localhost:3001/data",
        data:{
            id:Math.floor(Math.random() *1000),
            image:newProduct.image,
            title: newProduct.title,
            description: newProduct.description,
            price: newProduct.price,
        },
      })
  };
  return (
    <div className="h-screen">
      <Container>
        <div className="flex flex-col flex-wrap border my-4 rounded bg-slate-200 shadow-inner text-right rtl ">
          <div className="flex justify-evenly flex-wrap  w-full  p-2 border">
            <input
              onChange={() => {}}
              name="title"
              className="text-right border m-2 pe-2 rounded h-8"
              type="text"
              placeholder="عنوان"
            />
            <input
              onChange={handleChangeProduct}
              name="price"
              className="text-right pe-2 m-2 rounded h-8"
              type="text"
              placeholder="قیمت"
            />
            <input
              onChange={handleChangeProduct}
              name="image"
              className="text-right pe-2 m-2 rounded h-8"
              type="text"
              placeholder="عکس"
            />
          </div>
          <textarea
            onChange={handleChangeProduct}
            name="description"
            className=" p-2 text-right border mx-auto my-4 rounded w-5/12 h-36"
            placeholder="توضیحات "
            id=""
          ></textarea>
          <button
            onClick={handleCreateProduct}
            className="border shadow-inner w-5/12 h-10 rounded-lg mx-auto bg-blue-300 text-white font-bold hover:bg-blue-700 duration-700 my-4"
          >
            ساخت محصول جدید
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
