"use client"
import React , { useContext } from 'react'
import { CartContext } from "@/app/hooks/CartContext"
import { notifications } from '@mantine/notifications'
import { AddShoppingCartOutlined, CheckOutlined } from '@mui/icons-material';
import { Button } from '@mantine/core';

const AddToCartBtn = ({product}) => {
    const {setCartItems} = useContext(CartContext);
    const addToCart = (product) => {
      //dummy example
      const cart = localStorage.getItem("cart");
      if(cart){
        let num = Number(cart);
        num++;
        localStorage.setItem("cart",num);
        setCartItems(num);
      }else{
        localStorage.setItem("cart",1)
        setCartItems(1);
      }
      notifications.show({
        title: "Added to cart",
        message: `You have succefully added "${product.title}" to your cart`,
        icon: <CheckOutlined/>,
      })
    }
  return (
    <Button onClick={() => addToCart(product)} leftSection={<AddShoppingCartOutlined/>}>Add to Cart</Button>

  )
}

export default AddToCartBtn
