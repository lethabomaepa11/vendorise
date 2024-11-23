import Image from 'next/image'
import React from 'react'
import {product} from "../lib/dummy/data"
import { Autocomplete, Button, Card, Divider } from '@mantine/core'
import { CollectionsOutlined, DeleteOutline, DeliveryDiningOutlined, RemoveShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link'
import CheckOutForm from "@/app/components/CheckOutForm"

const ItemsCart = () => {
    const array = [];
    for(let i = 0; i < 30; i++){
        array.push(i);
    }
  return (
    <div className='flex justify-center items-center'>
        <div className='w-full lg:w-[80%] flex flex-col lg:flex-row lg:rounded-lg lg:shadow-lg overflow-auto mb-5'>
        <div className='w-full lg:w-[70%] lg:max-h-screen p-2 lg:p-10 space-y-3 overflow-auto'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold'>Shopping Cart</h1>
                <p className='text-xl font-bold p-1 bg-teal-600 text-white rounded-lg'>10 items</p>
            </div>
            <Divider/>
                {array.map( (item) => {
                return <div key={item} className='flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg'>
                        <div className='flex space-x-5 justify-center items-center'>
                            <Image className='rounded-lg' src={product.image} alt={product.title} width={60} height={60}/>
                            <span>
                                <h2 className=' text-base font-semibold'>{product.title}</h2>
                                <p className='text-sm'>{product.category}</p>
                                <Link href={product.owner.url} className='text-sm text-gray-500'>From: {product.owner.fullName}</Link>
                            </span>
                        </div>
                        <span className='flex flex-col-reverse items-center'>
                            <p className='text-lg font-bold'>R {product.price}</p>
                            <Button size="xs" fullWidth={false} color='red' variant='subtle'><DeleteOutline/></Button>
                        </span> 
                    </div>
                })} 
        </div>
        <div className='w-full lg:w-[30%] bg-gray-200 lg:max-h-screen overflow-auto lg:p-10 space-y-3 p-2'>
            <h1 className='text-xl font-bold'>Payment Summary</h1>
            <Divider/>
            <CheckOutForm/>

        </div>
        </div>
    </div>
  )
}

export default ItemsCart
