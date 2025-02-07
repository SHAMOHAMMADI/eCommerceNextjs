"use client";
import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

export type Cartitems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: Cartitems[];
  handleIncreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  getRemoveProduct: (id: number) => void;
};
const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export default function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Cartitems[]>([]);

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currenttItem) => {
      const isNotProductExist =
        currenttItem.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currenttItem, { id: id, qty: 1 }];
      } else {
        return currenttItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currenttItem) => {
      const isLastOne = currenttItem.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currenttItem.filter((item) => item.id != id);
      } else {
        return currenttItem.map((item) => {
          if (item.id == id && item.qty > 0) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        getRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
