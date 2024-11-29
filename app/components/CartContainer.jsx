"use client"

import React, {  useEffect, useState } from 'react'
import Link from 'next/link';
import { Anchor } from '@mantine/core';
import LoadingUI from './LoadingUI';
import { AddShoppingCartRounded } from '@mui/icons-material';
import ProductList from './ProductList';
import ItemsCart from "@/app/components/ItemsCart"

const CartContainer = () => {
    const [cartItems,setCartItems] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect( () => {
        const cart = localStorage.getItem("cart");
        if(cart){
            setCartItems(cart)
        }else{
            //cart empty
            setCartItems(null);
        }
        setLoading(false)
    },[])
    if(loading)
        return <LoadingUI/>
    else
  return (
    <div>
     <div>
        {!cartItems && <span className='flex flex-col justify-center items-center mt-10'><AddShoppingCartRounded className='animate-bounce' sx={{fontSize: 80}}/><p className='font-bold'>Your Cart is empty</p><p className='text-sm'>Let&apos;s add some items</p> <Anchor component={Link} fw={500} href="/">Start shopping</Anchor></span>}
        {cartItems && <ItemsCart/>}
        <div>
            <ProductList/>
        </div>
    </div>
    </div>

  )
}

export default CartContainer
