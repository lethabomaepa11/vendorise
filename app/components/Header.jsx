"use client"
import { Button, FileInput, Indicator, Modal, NativeSelect, NumberInput, Textarea, TextInput } from '@mantine/core'
import { AddCircle, AddCircleOutline, HomeOutlined, LoginOutlined, PersonOutline, SearchOutlined, ShoppingBag, ShoppingCartOutlined, UploadFileOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/CartContext'
import { useDisclosure } from '@mantine/hooks'
import { categories } from '../lib/dummy/data'
import { AuthContext } from '../hooks/AuthContext'
import SortFilter from "./SortFilter"
import Login from '../(auth)/login/page'

const Header = () => {
    const {isLoggedIn} = useContext(AuthContext);
    const pathname = usePathname();
    const [opened,{open,close}] = useDisclosure();
    const authPaths = ["/login","/signup"];
    const {cartItems, setCartItems} = useContext(CartContext);
    const productPages = ["/","/search"];
    useEffect(() => {
      const cart = localStorage.getItem("cart");
      if(cart){
        setCartItems(cart);
      }
    },[])
   
    if(!authPaths.includes(pathname))
  return (
<div className='z-50 top-0 fixed bg-white'>
    <div className='flex w-screen shadow h-[80px] items-center px-3 backdrop-blur justify-between'>
      <Link href="/"><Image className='h-[70px] w-[140px]' src="/logo.png" width={1000} height={1000} alt='logo'/></Link>
      {pathname.includes("/admin") && <p className='text-gray-400 font-bold text-sm'>Warehouse staff</p>}
      {!pathname.includes("/admin") && <>
      <div className='flex space-x-5 items-end w-2/3 mr-5'>
        <form className='w-full hidden mr-10 lg:inline'> 
            <TextInput leftSection={<SearchOutlined/>} size='lg' placeholder='Search products, categories or people'/>
        </form>
        <Link href="/" className='flex justify-center items-center flex-col'><HomeOutlined /><p>Home</p></Link>
        <div className='lg:hidden'><SearchOutlined/><p>Search</p></div>
        <div onClick={open}><AddCircleOutline/><p>Sell</p></div>
        <Link href="/cart">
            <Indicator size={20} label={cartItems}>
                <ShoppingCartOutlined/>
            </Indicator><p>Cart</p>
        </Link>
        
        {
            isLoggedIn ? <Link href="/profile" className='flex flex-col justify-center items-center'><PersonOutline/><p>Me</p></Link> 
            : 
            <div onClick={open}><LoginOutlined/><p>Login</p></div>
        }
        
        
        
        
        
      </div>
      
      <Modal opened={opened} onClose={close} title={<p className='text-xl font-bold'>{isLoggedIn ? "Sell Products" : "Login"}</p>}>
        {isLoggedIn ?<form className='space-y-3'>
          <TextInput name="title" label="Title"/>
          <NumberInput leftSection={<p className='text-lg font-bold'>R</p>} name='price' label="Price"/>
          <NativeSelect name="category" data={categories} label="Category"/>
          <FileInput placeholder="No files selected" leftSection={<UploadFileOutlined/>} name="images" accept='image/jpeg,image/png,image' multiple label="Upload Images"/>
          <Textarea label="Description" placeholder='Describe your product'/>
          <Button>Publish product</Button>
        </form> :
        <Login pathname={pathname}/>
}
      </Modal>
      </>}
    </div>
    {productPages.includes(pathname) && <SortFilter/>}
    
  </div>
  )
}

export default Header
