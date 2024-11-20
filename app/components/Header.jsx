"use client"
import { Button, FileInput, Indicator, Modal, NativeSelect, NumberInput, Textarea, TextInput } from '@mantine/core'
import { AddCircle, AddCircleOutline, LoginOutlined, PersonOutline, SearchOutlined, ShoppingBag, ShoppingCartOutlined, UploadFileOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/CartContext'
import { useDisclosure } from '@mantine/hooks'
import { categories } from '../lib/dummy/data'

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const pathname = usePathname();
    const [opened,{open,close}] = useDisclosure();
    const authPaths = ["/login","/signup"];
    const {cartItems, setCartItems} = useContext(CartContext);
    useEffect(() => {
      const cart = localStorage.getItem("cart");
      if(cart){
        setCartItems(cart);
      }
    },[])
   
    if(!authPaths.includes(pathname))
  return (
    <div className='flex z-50 top-0 fixed bg-white/90 w-screen shadow h-[80px] items-center px-3 backdrop-blur justify-between'>
      <Link href="/"><Image className='h-[70px] w-[140px]' src="/logo.png" width={1000} height={1000} alt='logo'/></Link>
      <div className='flex space-x-5 items-center w-2/3 mr-5'>
        <form className='w-full hidden mr-10 lg:inline'> 
            <TextInput leftSection={<SearchOutlined/>} size='lg' placeholder='Search products, categories or people'/>
        </form>
        <div className='lg:hidden'><SearchOutlined/>Search</div>
        <div onClick={open}><AddCircleOutline/>Sell</div>
        <Link href="/cart">
            <Indicator size={20} label={cartItems}>
                <ShoppingCartOutlined/>
            </Indicator>Cart
        </Link>
        
        {
            loggedIn ? <Link href="/user/lethabo" className='flex flex-col justify-center items-center'><PersonOutline/>Me</Link> 
            : 
            <Link href="/login"><LoginOutlined/>Login</Link>
        }
        
        
        
        
        
      </div>

      <Modal opened={opened} onClose={close} title={<h2 className='text-xl font-bold'>Sell Products</h2>}>
        <form className='space-y-3'>
          <TextInput name="title" label="Title"/>
          <NumberInput leftSection={<p className='text-lg font-bold'>R</p>} name='price' label="Price"/>
          <NativeSelect name="category" data={categories} label="Category"/>
          <FileInput placeholder="No files selected" leftSection={<UploadFileOutlined/>} name="images" accept='image/jpeg,image/png,image' multiple label="Upload Images"/>
          <Textarea label="Description" placeholder='Describe your product'/>
          <Button>Publish product</Button>
        </form>
      </Modal>
      
    </div>
  )
}

export default Header
