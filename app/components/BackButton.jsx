"use client"
import { Button } from '@mantine/core';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = ({className}) => {
    const router = useRouter();
  return (
    <div className={className}><Button variant='subtle' fullWidth={false} onClick={() => router.back()}><ArrowBackIosNewOutlined/><p className='text-sm'>Back</p></Button></div>
  )
}

export default BackButton
