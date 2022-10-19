import React from 'react'
import { useEffect } from 'react'
import {AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getMyOrders } from '../../redux/actions/order'
import Loader from '../layout/Loader'
const MyOrders = () => {
    const dispatch = useDispatch()
    const {orders,loading,error} = useSelector(state=>state.myorder)
    useEffect(()=>{
        if(error){
            dispatch({type:"clearError"})
        }
        dispatch(getMyOrders())
    },[dispatch,error])
  return (
    <section className='tableClass'>
        {orders["order"]!==undefined?<Loader/>:
        <main>
        <table>
            <thead>
                
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(item=>{
                    let qty = 0
                    qty+=item.orderItems.cheeseBurger.qty+item.orderItems.vegCheeseBurger.qty+item.orderItems.doubleTikkiCheeseBurger.qty
                    return <tr key={item.id}>
                    <td>{item._id}</td>
                    <td>{item.orderStatus}</td>
                    <td>{qty}</td>
                    <td>Rs {item.totalAmount}</td>
                    <td>{item.paymentMethod}</td>
                    <td>
                        <Link to={`/order/${item._id}`}><AiOutlineEye/></Link>
                    </td>

                </tr>
                })}
                
            </tbody>
        </table>
    </main>}
    </section>
  )
}

export default MyOrders