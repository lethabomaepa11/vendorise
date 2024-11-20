
import { Button, Card, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center p-5'>
      <form className='w-full lg:w-2/5 space-y-3'>
          <TextInput type='email' label="Email" placeholder='example@email.com'/>
          <PasswordInput label="Password"/>
          <Button type='submit'>Login</Button>
          <Button component={Link} href="/signup" variant="outline">Signup here.</Button>
      </form>
    </div>
  )
}

export default Login
