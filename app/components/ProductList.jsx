"use client"
import { Button, Card, CardSection, Divider } from '@mantine/core'
import { AddShoppingCartRounded, FavoriteOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    const array = [];
    for(let i = 0; i < 30; i++){
        array.push(i);
    }
  return (
    <div className='lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 justify-center items-center'>
      {array.map((index) => {
            return <Card key={index} withBorder>
                <Link href="/product/lll">
                <CardSection>
                    <Image className='w-full' src="/Stay Wild.png" alt={index} width={1000} height={1000}/>
                </CardSection>
                <Divider/>
              <div className="flex flex-col w-full overflow-hidden">
                <p className="text-pretty">Get Wild Design</p>
                <h3 className='text-xl font-bold'>R 18.99</h3>
                </div>
                </Link>
              

              <Button size='md'>Add to cart</Button>

              
          </Card>})}
        
    </div>
  )
}

export default ProductList
