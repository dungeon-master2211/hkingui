import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../../redux/actions/order'
import Loader from '../layout/Loader'

const OrderDetail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const {loading,orders} = useSelector(state=>state.myorder)
  useEffect(()=>{
    dispatch(getOrderDetails(params.id))
  },[dispatch,params.id])
  // console.log(orders['order'])
  if(orders['order']!==undefined){
    var base = orders.order.shippingInfo
    var address = `${base.hNo} ${base.city} ${base.city} ${base.state} ${base.country} ${base.pincode}`
  }
  
  return (
    <section className='orderDetails'>
        {orders['order']===undefined?<Loader/>:
        <main>
        <h2>Order Details</h2>
        <div>
          <h4>Shipping</h4>
          <p>
            <b>Address</b>
            {address}
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <b>Name</b>
            {orders.name}
          </p>
          <p>
            <b>Phone</b>
            {base.phoneNo}
          </p>
        </div>
        <div>
          <h4>Status</h4>
          <p>
            <b>Order Status</b>
            {orders.order.orderStatus}
          </p>
          <p>
            <b>Placed At</b>
            {orders.order.createdAt}
          </p>
          <p>
            <b>Delivered At</b>
            {orders.order["deliveredAt"]!==undefined?orders.order["deliveredAt"]:"NA"}
          </p>
        </div>
        <div>
          <h4>Payment</h4>
          <p>
            <b>Payment Method</b>
            {orders.order.paymentMethod}
          </p>
          <p>
            <b>Payment Reference</b>
            #{orders.order.paymentMethod==='Online'?orders.order.paymentInfo:'NA'}
          </p>
          <p>
            <b>Paid At</b>
            {orders.order.paymentMethod==='Online'?orders.order.createdAt: orders.order["deliveredAt"]!==undefined?orders.order["deliveredAt"]:"NA"}
          </p>
        </div>
        <div>
          <h4>Amount</h4>
          <p>
            <b>Items Total</b>
            Rs.{orders.order.itemsPrice}
          </p>
          <p>
            <b>Shipping Charges</b>
            Rs.{orders.order.shippingCharges}
          </p>
          <p>
            <b>Tax</b>
            Rs.{orders.order.taxPrice}
          </p>
          <p>
            <b>Total</b>
            Rs.{orders.order.itemsPrice+orders.order.shippingCharges+orders.order.taxPrice}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{orders.order.orderItems.cheeseBurger.qty}</span> X <span>{orders.order.orderItems.cheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{orders.order.orderItems.vegCheeseBurger.qty}</span> X <span>{orders.order.orderItems.vegCheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Double Tikki Cheese Burger</h4>
            <div>
              <span>{orders.order.orderItems.doubleTikkiCheeseBurger.qty}</span> X <span>{orders.order.orderItems.doubleTikkiCheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Sub Total</h4>
            <div>Rs{orders.order.itemsPrice}</div>
          </div>
        </article>
      </main>}
    </section>
  )
}

export default OrderDetail