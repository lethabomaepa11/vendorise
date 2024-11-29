import React from 'react'
import DashBoard from "../components/DashBoard"
import OrderVerification from "../components/OrderVerification"
const AdminPage = () => {
  return (
    <div className='my-5 space-y-3 flex flex-col justify-center items-center'>
      <p className='hidden'>
      This is the admin page<br/>
      There will be a DashBoard for the admin to navigate within,<br/>
      Admin must be able to verify a product/order<br/>
      Admin must be able to see how many orders are being processed per day<br/>
      Maybe in the future could add a scanner<br/>
      </p>
        <DashBoard/>
        <OrderVerification/>
    </div>
  )
}

export default AdminPage
