import React from 'react'
import { product } from "@/app/lib/dummy/data";
import { AddShoppingCartOutlined, ArrowBackIosNewOutlined, CheckOutlined, FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import BackButton from "@/app/components/BackButton"
import AddToCartBtn from "@/app/components/AddToCartBtn"
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Divider, Spoiler } from '@mantine/core';


const Product = () => {
    
  return (
    <div className='-mt-[70px]'>
      <BackButton className="lg:hidden"/>
      <div className='flex -mt-3 flex-1 flex-col lg:flex-row justify-around'>
        <Image className='w-full lg:w-2/5' src={product.image} alt={product.title} width={300} height={300}/>
        <div className='p-5 space-y-3 max-w-[700px]'>
            <Link href={`/category/${product.category}`} className='text-gray-600 hover:underline text-sm'>Category / {product.category}</Link>
            <div>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
                <h2 className='text-xl font-bold'>R {product.price}</h2>
                <Link href={product.owner.url} className='text-gray-600 hover:underline'>By {product.owner.fullName}</Link>
            </div>
            <Card shadow="xs" withBorder title='Description'>
                <h1 className='text-lg font-bold'>
                    Description
                </h1>
                <Divider/>
                <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">{product.description}</Spoiler>
            </Card>
            <div className='flex gap-3'>
                <AddToCartBtn product={product}/>
                <div className='w-2/5'>
                <Button fullWidth variant="subtle"><FavoriteBorderOutlined/></Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
