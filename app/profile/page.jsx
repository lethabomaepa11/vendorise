"use client"
import {  Divider, Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core'
import {  ChevronRightOutlined, PersonOutlineOutlined, ProductionQuantityLimitsOutlined, ShoppingCartCheckoutOutlined, WalletSharp } from '@mui/icons-material'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/AuthContext'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const array = [];
  for(let x = 0; x < 20;x++){
    array.push(x);
  }
  const [hash,setHash] = useState("account");
  const {setIsLoggedIn} = useContext(AuthContext);
  const router = useRouter();
  const setTab = (page) => {
    if(page){
      setHash(page)
      localStorage.setItem("prfl_tab",page)
    }
    else{
      const tab = localStorage.getItem("prfl_tab");
      if(tab){
        setHash(tab);
        location.hash = tab;
      }
    }
    
    
  }
  useEffect( () => {
    setTab();//set the tab after load
    const handleStateChange = () => {
      const tab = location.hash.substring(1);
      setTab(tab);
      localStorage.setItem("prfl_tab",tab);   
    }
    window.addEventListener("popstate",handleStateChange);

    return () => {
      removeEventListener("popstate",handleStateChange)
    }

  },[])
  const handleLogout = () => {
    setIsLoggedIn(false);
    router.replace("/login");
  }
  return (
    <div className='flex flex-col lg:justify-around lg:items-center -mt-[70px]'>
      <p className='hidden'>
        Show my past orders
        Track my current orders
        Show my products
        Show my wallet
        Have notifications for when my order status changes
        Have notifications to show when my product is requested

      </p>
      <h1 className='text-xl font-semibold'>Lethabo Maepa</h1>
      <p className='text-sm text-gray-500'>lethabomaepa11@gmail.com</p>
      <div className='flex flex-col lg:justify-around lg:flex-row  gap-2 items-start'>
        <Tabs variant="default" defaultValue={hash} value={hash}>
          <TabsList>
            <TabsTab component={Link} href="#account" onClick={() => setTab("account")} value='account' leftSection={<PersonOutlineOutlined/>}>My Account</TabsTab>
            <TabsTab component={Link} href="#wallet" onClick={() => setTab("wallet")} value='wallet' leftSection={<WalletSharp/>}>My Wallet</TabsTab>
            <TabsTab component={Link} href="#orders" onClick={() => setTab("orders")} value='orders' leftSection={<ShoppingCartCheckoutOutlined/>}>My Orders</TabsTab>
            <TabsTab component={Link} href="#products" onClick={() => setTab("products")} value='products' leftSection={<ProductionQuantityLimitsOutlined/>}>My Products</TabsTab>
          </TabsList>
          <TabsPanel value='account'>
            <div className='flex flex-col w-full  p-3  border rounded-lg lg:max-h-screen'>
              <Link href="#" className='flex justify-between p-3'><p>Personal details</p><ChevronRightOutlined/></Link>
              <Divider/>
              <Link href="#" className='flex justify-between p-3'><p>Update Password</p><ChevronRightOutlined/></Link>
              <Divider/>
              <Link href="/" onClick={() => handleLogout()} className='flex justify-between p-3'><p>Logout</p><ChevronRightOutlined/></Link>
              <Divider/>
            </div>
          </TabsPanel>
          <TabsPanel value='wallet'>
            <div className='flex flex-col gap-1 p-2 lg:max-h-screen overflow-auto'>
              <p className='text-sm'>Balance</p>
              <h2 className='text-xl font-bold'>R 0.0</h2>
              <div className='border p-2 rounded-lg text-center hover:bg-gray-50 active:scale-95 cursor-pointer'>Withdraw</div>
              <p className='font-semibold'>History</p>
              <Divider/>
              {array.map(item => {return <div key={item} className='flex cursor-default justify-between hover:bg-gray-100 p-2 rounded-lg transition-all'>
                <div className='flex flex-col'>
                  <p>Withdraw</p>
                  <p className='text-sm text-gray-400'>04 November 2024</p>
                </div>
                <p className='font-bold'>R 299,99</p>
              </div>})}
            </div>
            
          </TabsPanel>
          <TabsPanel value='orders'>
            <div className='flex flex-col gap-1 p-2 lg:max-h-screen overflow-auto'>
              {array.map(item => {return <div key={item} className='flex cursor-default justify-between hover:bg-gray-100 p-2 rounded-lg transition-all'>
                  <div className='flex flex-col'>
                    <p>{item % 2 ? "Delivered":"Accepted"}</p>
                    <p className='text-sm text-gray-400'>04 November 2024</p>
                  </div>
                  <p className='font-bold'>R 299,99</p>
                </div>})}
            </div>
          </TabsPanel>
          <TabsPanel value='products'>
            Products that are sold and currently placed for sale will be displayed here
          </TabsPanel>

        </Tabs>
      </div>
    </div>
  )
}

export default Profile
