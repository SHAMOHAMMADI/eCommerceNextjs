"use client"
import { createContext, useContext, useState } from "react";


type ShoppingCartContextProviderProps = {
    children : React.ReactNode
}

export type Cartitems = {
    id: number, 
    qty: number
}

type TShoppingCartContext = {
    cartItems : Cartitems[],
    handleIncreaseProductQty:(id:number)=> void,
    getProductQty : (id:number)=>number

}
  const ShoppingCartContext = createContext({} as TShoppingCartContext)
 
 export const useShoppingCartContext = ()=>{
    return useContext (ShoppingCartContext)

 }

 export default function ShoppingCartContextProvider({children}:ShoppingCartContextProviderProps){

    const [cartItems , setCartItems] = useState<Cartitems[]>([])

    const handleIncreaseProductQty = (id:number) => {
        setCartItems((currenttItem)=>{
            let isNotProductExist = currenttItem.find((item)=>item.id) == null
            if(isNotProductExist){
                return [...currenttItem , {id:id , qty:1}]
            }else {
                return currenttItem.map((item)=>{

                    if(item.id == id){
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }else {
                        return item
                    }
                }
            )
            }
        })

    }

    const getProductQty = (id:number)=>{
        return cartItems.find((item)=>item.id == id)?.qty || 0
    }
    return(
      <ShoppingCartContext.Provider value={{cartItems , handleIncreaseProductQty,getProductQty}}>
        {children}
      </ShoppingCartContext.Provider>
    )
 }