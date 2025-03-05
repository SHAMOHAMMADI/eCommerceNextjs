"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";
// import localStorage from 'local-storage'

interface IAddToCart {
  id: string;
}
function AddToCart({ id }: IAddToCart) {
  const {
    cartItems,
    handleIncreaseProductQty,
    getProductQty,
    getRemoveProduct,
    handleDecreaseProductQty,
  } = useShoppingCartContext();
  // localStorage.setItem("id",cartItems)
  return (
    <div>
      <div className="flex ">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="text-white bg-blue-700 px-6 m-2 rounded"
        >
          +
        </button>
        {getProductQty(parseInt(id))}
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="text-white bg-blue-700 px-6 m-2 rounded"
        >
          -
        </button>
      </div>
      <span className="mx-4">{getProductQty(parseInt(id))}</span>
      <button
        onClick={() => getRemoveProduct(parseInt(id))}
        className="text-white bg-[#ff0000] px-6 m-2 rounded"
      >
        حذف
      </button>
    </div>
  );
}

export default AddToCart;
