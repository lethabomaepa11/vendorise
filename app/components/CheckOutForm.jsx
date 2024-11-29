"use client"
import { Button, Divider, NativeSelect, NumberInput, TextInput } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../hooks/AuthContext';

const CheckOutForm = () => {
    const [collect,setCollect] = useState(null);
    const {isLoggedIn} = useContext(AuthContext);
  return (
    <div>
        <div className='w-full my-5'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'>Ordered items</p>
                <p >R 590.99</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'>Delivery Fee</p>
                <p>R {collect == "delivery" ? "59.99":"0.00"}</p>
            </div>
            <Divider/>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'>Total</p>
                <p className='text-lg font-semibold text-pretty'>R 590.99</p>
            </div>
        </div>
        <div className='flex'>
            <Button onClick={() => setCollect("collect")} size="sm" variant={collect == "collect" ? "filled":"default"}>Collect</Button>
            <Button onClick={() => setCollect("delivery")} size="sm" variant={collect == "delivery" ? "filled":"default"}>Delivery</Button>
        </div>
        {isLoggedIn && <form className='my-4 space-y-4'>
        { collect == "collect" && <div>
            <h2 className='text-lg font-bold'>Collect</h2>
            <p className='text-sm text-gray-500'>Make sure to turn on your location/GPS to find local warehouse near you for collection</p>
            <NativeSelect data={["Pretoria","Johannesburg","Soshanguve"]} label="Warehouse near me" placeholder='Select a warehouse near you for collection'/>
        </div>}
        { collect == "delivery" && <div>
            <h2 className='text-lg font-bold'>Delivery</h2>
            <p className='text-sm text-gray-500'>Please provide the delivery address to receive your items</p>
            <NativeSelect data={["Gauteng","Free State","Mpumalanga","Kwazulu-Natal","Northern Cape","Western Cape","North West","Limpopo","Eastern Cape"]} label="Province" placeholder='Select uour province'/>
            <TextInput label="City/Town" placeholder='Enter your city'/>
            <TextInput label="Street address" placeholder='1234 Block X'/>
            <NumberInput label="Code" placeholder='0123'/>
        </div>}
        <Button className='fixed bottom-0' size="sm" type='submit'>Proceed to checkout</Button>
        </form>}
        {!isLoggedIn && 
            <div className='my-5'>
                <p className='text-pretty text-gray-500 text-sm font-bold'>You need to login to be able to proceed with checkout</p>
            </div>
        }
        
        
    </div>
  )
}

export default CheckOutForm
