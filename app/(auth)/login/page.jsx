
import { Button, Card, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Login = ({pathname}) => {
  return (
    <div className='flex justify-center p-5'>
      <form className={`w-full space-y-3 ${pathname != "/" && "lg:w-2/5"}`}>
          <TextInput type='email' label="Email" placeholder='example@email.com'/>
          <PasswordInput label="Password"/>
          <Button type='submit'>Login</Button>
          <Button component={Link} href="/signup" variant="outline">Signup here.</Button>
      </form>
    </div>
  )
}

export default Login
