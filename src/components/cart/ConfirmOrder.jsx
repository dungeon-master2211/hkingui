import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {createOrder, paymentVerification} from "../../redux/actions/order"
import { server } from '../../redux/store'
const ConfirmOrder = () => {
// shippingInfo,orderItems,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount
  const [paymentMethod, setPaymentMethod] = useState("")
  const [disableBtn,setDisableBtn] = useState(false)
  const dispatch = useDispatch()
  const {
    cartItems,
    subTotal,
    tax,
    shippingCharges,
    total,
    shippingInfo,
  
  } = useSelector(state=>state.cart)

  const {message,error} = useSelector(state=>state.order)
  async function handleSubmit(e){
    e.preventDefault()
    setDisableBtn(true)
    if(paymentMethod==="COD"){
      dispatch(createOrder(shippingInfo,cartItems,paymentMethod,subTotal,tax,shippingCharges,total))
    //   console.log(cartItems,
    //     subTotal,
    //     tax,
    //     shippingCharges,
    //     total,
    //     shippingInfo,paymentMethod)
    }else{
      const {data:{
        order,orderOptions
      }} = await axios.post(`${server}/createorderonline`,{
        shippingInfo,
        orderItems:cartItems,
        paymentMethod,
        itemsPrice:subTotal
        ,taxPrice:tax,
        shippingCharges,
        totalAmount:total
    },{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    var options = {
      key: "rzp_test_Jko2ZqcwceR05i", // Enter the Key ID generated from the Dashboard
      amount: order.amount, 
      currency: "INR",
      name: "Harshit Srivastava",
      description: "BKing",
      
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response){
          
          const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = response
          dispatch(paymentVerification(razorpay_order_id,razorpay_payment_id,razorpay_signature,orderOptions))
      },
      theme: {
          "color": "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open()
    }
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(message) {
      toast.success(message)
      dispatch({
        type:"clearMessage"
      })
      dispatch({
        type:"emptyState"
      })
      navigate("/paymentsuccess")
    }
    if(error) {
      toast.error(error)
      dispatch({
        type:"clearError"
      })
      setDisableBtn(false)
    }
  },[dispatch,message,error,navigate])
  return (
    <section className='confirmOrder'>
      <main>
        <form onSubmit={handleSubmit}>
          <h3>Confirm Order</h3>
          <div><input type="radio" name="payment" required onChange={()=>{setPaymentMethod("COD")}}/>Cash On Delivery</div>
          <div><input type="radio" name="payment" required onChange={()=>{setPaymentMethod("Online")}}/>Online</div>
          <button disabled={disableBtn} type="submit">Place Order</button>
        </form>
      </main>
    </section>
  )
}

export default ConfirmOrder