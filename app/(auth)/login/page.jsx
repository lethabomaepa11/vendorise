"use client"
import { Button,  PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Login = () => {
  const pathname = usePathname();
  return (
    <div className='flex justify-center p-5 '>
      <form className={`w-full space-y-3 ${(pathname != "/" && pathname != "/cart") && "lg:w-2/5 -mt-[70px]"}`}>
      {pathname == "/login" && <h1 className='text-2xl font-bold text-left'>Login to Vendorise</h1>}

          <TextInput type='email' label="Email" placeholder='example@email.com'/>
          <PasswordInput label="Password"/>
          <Button type='submit'>Login</Button>
          <Button component={Link} href="/signup" variant="outline">Signup here.</Button>
      </form>
    </div>
  )
}

export default Login
