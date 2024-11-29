"use client"
import { Button, Card, CardSection, Divider, Skeleton } from '@mantine/core'
import { AddShoppingCartRounded, ArrowDropDownOutlined, CheckOutlined, FavoriteOutlined, Filter1Outlined, FilterOutlined, SortOutlined, TuneOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect } from 'react'
import { product } from '../lib/dummy/data'
const LoadingProducts = () => {

  useEffect( () => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if(scroll > 0){
        //scrolled down
        const sticky = document.getElementById("sticky");
        sticky.style.position = "fixed";
        sticky.style.top = "0";
        console.log(scroll)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return(
    <>
    
      <Skeleton height={100} mb={xl}/>
      <Divider/>
    <div className="flex flex-col w-full overflow-hidden">
    <Skeleton height={10} mt={6}/>
    <Skeleton height={10} mt={6}/>
      </div>    
            
    </>
  )
}
const ProductList = () => {
    const array = [];
    for(let i = 0; i < 30; i++){
        array.push(i);
    }
    
  return (
    <div className='flex'>
      
      <div className='space-y-5'>
        <span id="sticky" className='flex justify-between items-center sticky top-0 z-30'>
          <h2 className="text-xl font-bold">Explore</h2>
        </span>
        <Divider/>
      <div className='w-full  grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 justify-center items-center overflow-auto '>
        <Suspense fallback={<LoadingProducts/>}>
        {array.map((index) => {
              return <Card key={index} className='hover:scale-95 hover:border-b-2 hover:border-teal-600 transition-all'>
                  <Link href="/product/lll">
                  <CardSection>
                      <Image className='w-full' src={product.image} alt={index} width={1000} height={1000}/>
                  </CardSection>
                  <Divider/>
                  </Link>
                <div className="flex flex-col w-full overflow-hidden">
                <Link href="/product/lll" className="text-pretty">{product.title}</Link>
                  <Link href={product.owner.url} className='text-gray-500 text-sm hover:underline'>{product.owner.fullName}</Link>
                  <h3 className='text-lg font-bold'>R {product.price}</h3>
                  </div>    
            </Card>})}
          </Suspense>
      </div>
      </div>
    </div>
  )
}

export default ProductList
