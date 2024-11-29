import { product } from '@/app/lib/dummy/data'
import { Button, Card, Divider, NativeSelect, Spoiler } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const AdminOrderProductPage = ({params}) => {
    const statuses = ["Not yet received","Bad condition","Good condition"]
  return (
    <div className='flex -mt-3 flex-1 flex-col lg:flex-row justify-around'>
        <Image className='w-full lg:w-2/5' src={product.image} alt={product.title} width={300} height={300}/>
        <div className='p-5 space-y-3 max-w-[700px]'>
            <div>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
                <p className='text-gray-600 hover:underline'>From {product.owner.fullName}</p>
            </div>
            <Card shadow="xs" withBorder title='Description'>
                <h1 className='text-lg font-bold'>
                    Description
                </h1>
                <Divider/>
                <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">{product.description}</Spoiler>
            </Card>
            <form className='space-y-3'>
                <NativeSelect label="Status" data={statuses} />
                <Button type='submit'>Save</Button>
            </form>
                
        </div>
      </div>
  )
}

export default AdminOrderProductPage
