"use client";
import CartItems from "@/components/CartItems";
import Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { IApi } from "@/type/Type";
import { formatNumberWithCommas } from "@/utils/number";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IDiscountData {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContext();

  const [data, setData] = useState<IApi[]>([]);

  const [discount, setDiscount] = useState("");

  const [finalPrice, setFinalPrice] = useState(0);
  const [discountPrice, setDisconutPrice] = useState(0);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // setData(res.data)
      const { data } = res;
      setData(data);
    });
  }, []);
  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find((product) => product.id == item.id);
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);
  const handleSubmitDiscount = () => {
    axios.get(`http://localhost:3001/discount?code=${discount}`).then((res) => {
      const data = res.data as IDiscountData[];
      const discountPrice = (totalPrice * data[0].percentage) / 100;
      const finalPrice = totalPrice - discountPrice;
      setFinalPrice(finalPrice);
      setDisconutPrice(discountPrice);
    });
  };
  return (
    <Container>
      <div className=" grid my-4 gap-2 mb-10">
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}

        <div className="bg-blue-100 border h-fit m-6 p-6 shadow-inner text-right">
          <h3>
            قیمت کل :{" "}
            <span>
              {formatNumberWithCommas(
                cartItems.reduce((total, item) => {
                  const selectedProduct = data.find(
                    (product) => product.id == item.id
                  );
                  const totalPrice =
                    total + (selectedProduct?.price || 0) * item.qty;

                  return totalPrice;
                }, 0)
              )}
            </span>
          </h3>
          <label htmlFor="discount">لطفا کد تخفیف را وارد کنید</label>
          <input
            type="text"
            id="discount"
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
          <span>تخفیف:{discountPrice}</span>
          <p>
            قیمت نهایی : {formatNumberWithCommas(finalPrice)}
            <span></span>
          </p>
          <button
            onClick={handleSubmitDiscount}
            className="bg-blue-500 text-white p-2 rounded m-2 hover:shadow hover:bg-blue-800 duration-500"
          >
            اعمال تخفیف
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
