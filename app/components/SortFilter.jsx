import React from 'react'
import {Button} from "@mantine/core"
import {ArrowDropDownOutlined,TuneOutlined} from '@mui/icons-material'

const SortFilter = () => {
  return (
    <span id="sticky" className='flex justify-between items-center sticky top-0 z-30 p-5'>
        <Button size='sm' color='dark' variant='default' fullWidth={false} rightSection={<ArrowDropDownOutlined/>}>Category</Button>
        <Button size='sm' color='dark' variant='default' fullWidth={false} leftSection={<TuneOutlined/>}>Sort / Filter</Button>
    </span>
  )
}

export default SortFilter
