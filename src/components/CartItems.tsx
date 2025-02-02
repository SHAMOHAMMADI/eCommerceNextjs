import React from "react";
import AddToCart from "./AddToCart";

function CartItems() {
  return (
    <div>
      <div className="grid grid-cols-12 border ">
        <div className="col-span-9 p-6 text-right">
          <h2>اسم محصول</h2>
          <p>تعداد</p>
          <h3 className="">
          <span> $قیمت محصول : 45</span>
          </h3>
          <AddToCart/>
        </div>
        <div className="col-span-3">
          <img 
          className="h-full rounded-r-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrq_5GlnVyzzb3LKUPvmoYJrMaQ5nhr8J2x3LvuvHqCxhvyw_qoW4dHnOLccc2feUZFM&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
