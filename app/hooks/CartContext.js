"use client"
import React, { createContext, useState } from 'react'
export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState(0);
  return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
