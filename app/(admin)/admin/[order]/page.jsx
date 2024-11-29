import { product } from '@/app/lib/dummy/data'
import { Button, Divider, NativeSelect, TextInput } from '@mantine/core'
import { CancelOutlined, CheckOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminOrderVerifyPage = ({params}) => {
    const array = [];
    for(let i = 0; i < 30; i++){
        array.push(i);
    }
    const statuses = ["Not in good quality","Not received","Product is satisfactory"]
    const orderNo = params.order;
  return (
    <div className='my-5 space-y-2 flex flex-col justify-center items-center'>
      <p>Click on a product to change its status</p>
      <div className='flex justify-between w-full lg:w-[70%] px-2 lg:px-10 border-b-2 py-2'>
            <h1 className='text-xl font-bold'>Order: {orderNo}</h1>
        </div>
            <Divider/>
      <div className='w-full lg:w-[70%] lg:max-h-screen p-2 lg:px-10 space-y-3 overflow-auto'>
                {array.map( (item) => {
                return <Link href={`/admin/${orderNo}/${item}`} key={item} className='flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg'>
                        <div className='flex space-x-5 justify-center items-center'>
                            <Image className='rounded-lg' src={product.image} alt={product.title} width={60} height={60}/>
                            <span>
                                <h2 className=' text-base font-semibold'>{product.title}</h2>
                                <p className='text-sm'>{product.category}</p>
                                <p className='text-sm text-gray-500'>From: {product.owner.fullName}</p>
                            </span>
                        </div>
                        <span className='flex flex-col items-center'>
                            <p className='text-sm text-gray-500'>Status</p>
                            <p className='text-sm font-bold'>Not received</p>{/**Not delivered, Bad condition, Good condition */}
                        </span> 
                    </Link>
                })} 
        </div>
    </div>
  )
}

export default AdminOrderVerifyPage
