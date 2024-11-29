"use client"
import { product } from '@/app/lib/dummy/data';
import { Autocomplete, Button, Divider } from '@mantine/core'
import { useForm } from '@mantine/form';
import { CancelOutlined, CheckOutlined, DeleteOutline } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const OrderVerification = () => {
    const data = ["gpJN12","LmhK98","jkLMn03","qyKh87","hYYw88"];
    const [showOrder, setShowOrder] = useState(false);
    const router = useRouter();
    const form = useForm({
        validate: {
            reference: (value) => !data.includes(value) ? "Code not recognized.": null,
        }
    })
    
  return (
    <div className='my-5 space-y-3 flex flex-col justify-center items-center'>
        <div>
            <p className='font-bold text-lg'>Product verification</p>
            <Divider/><br/>
            <p className='text-sm'>Find the <b>order reference code</b> inside the shipped product parcel</p>
            <br/>
            <form className='space-y-3' onSubmit={form.onSubmit((values) => router.push(`/admin/${values.reference}`))}>
                <Autocomplete key={form.key("reference")} {...form.getInputProps("reference")} name='reference' data={data} label="Reference code" placeholder='Enter the order reference code'/>
                <Button type='submit'>Search</Button>
            </form>
            
        </div>
    </div>
  )
}

export default OrderVerification
