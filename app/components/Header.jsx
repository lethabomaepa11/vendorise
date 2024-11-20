"use client"
import { Indicator, TextInput } from '@mantine/core'
import { AddCircle, AddCircleOutline, LoginOutlined, PersonOutline, SearchOutlined, ShoppingBag, ShoppingCartOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const pathname = usePathname();
    const authPaths = ["/login","/signup"];
    if(!authPaths.includes(pathname))
  return (
    <div className='flex z-50 top-0 fixed w-screen shadow h-[80px] items-center px-3 backdrop-blur justify-between'>
      <Image className='h-[70px] w-[140px]' src="/logo.png" width={1000} height={1000} alt='logo'/>
      <div className='flex gap-5 items-center w-2/3'>
        <form className='w-full mr-10'> 
            <TextInput leftSection={<SearchOutlined/>} size='lg' placeholder='Search products, categories or people'/>
        </form>
            <div><AddCircleOutline/>Sell</div>
            <Link href="/cart">
                <Indicator size={20} label="0">
                    <ShoppingCartOutlined/>
                </Indicator>Cart
            </Link>
        
        {
            loggedIn ? <Link href="/user/lethabo"><PersonOutline/>Profile</Link> 
            : 
            <Link href="/login"><LoginOutlined/>Login</Link>
        }
        
        
        
        
      </div>
      
    </div>
  )
}

export default Header
