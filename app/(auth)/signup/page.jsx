
import { Button, NativeSelect, NumberInput, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center px-5 flex-col -mt-70'>
      <form className='w-full lg:w-2/5 space-y-3'>
          <div className='flex flex-col lg:flex-row gap-5 w-full justify-between'>
            <TextInput name='name' id='name' label="Name" placeholder='John'/>
            <TextInput name='surname' id='surname' label="Surname" placeholder='Doe'/>
          </div>
          <NativeSelect label="Gender" data={["Male","Female","Prefer not to say"]}/>
          <NumberInput leftSection={<p>+27</p>} name='phone'  label="Cell number" placeholder='634578901'/>
          <TextInput name='email' type='email' label="Email" placeholder='example@email.com'/>
          <PasswordInput name='password' label="Create Password"/>
          <Button type='submit'>Signup</Button>
          <Button component={Link} href="/login" variant="outline">Login here.</Button>
      </form>
    </div>
  )
}

export default Signup
