import axios from "axios"
import { server } from "../store"

export const createOrder = (
    shippingInfo,orderItems,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount
)=> async(dispatch)=>{
    try {
        dispatch({
            type:"createOrderStatus"
        })

        const {data} = await axios.post(`${server}/createorder`,{
            shippingInfo,orderItems,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })

        dispatch({
            type:"createOrderSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"createOrderFailure",
            payload:error.response.data.message
        })
    }
} 

// paymentVerificationStatus

export const paymentVerification = (
    razorpay_order_id,razorpay_payment_id,razorpay_signature,orderOptions
)=> async(dispatch)=>{
    try {
        dispatch({
            type:"paymentVerificationStatus"
        })

        const {data} = await axios.post(`${server}/paymentVerification`,{
            razorpay_order_id,razorpay_payment_id,razorpay_signature,orderOptions
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })

        dispatch({
            type:"paymentVerificationSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"paymentVerificationFailure",
            payload:error.response.data.message
        })
    }
} 

export const getMyOrders = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getMyOrdersRequest"
        })
        const {data} = await axios.get(`${server}/myOrders`,{
            withCredentials:true
        })
        dispatch({
            type:"getMyOrdersSuccess",
            payload:data.orders
        })
    } catch (error) {
        dispatch({
            type:"getMyOrdersFail",
            payload:error.response.data.message
        })
    }
}

export const getOrderDetails = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"getOrderDetailsRequest"
        })
        const {data} = await axios.get(`${server}/order/${id}`,{
            withCredentials:true
        })
        const orders = {order:data.order,...data.user}
        // console.log(orders)
        dispatch({
            type:"getOrderDetailsSuccess",
            payload:orders
        })
    } catch (error) {
        dispatch({
            type:"getOrderDetailsFail",
            payload:error.response.data.message
        })
    }
}