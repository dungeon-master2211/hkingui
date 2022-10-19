import React from 'react'
import {Link} from "react-router-dom"
const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess'>
        <main>
            
            <h3>Order Confirmed</h3>
            <p>You can check you order Status from below</p>
            <Link to="/myOrder">Order Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess