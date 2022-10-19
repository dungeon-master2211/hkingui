import React from 'react'
import { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import {GiArmoredBoomerang} from "react-icons/gi"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAdminOrders,prcessOrders } from '../../redux/actions/admin'
import Loader from '../layout/Loader'
import toast from "react-hot-toast"
const Orders = () => {
    const dispatch = useDispatch()
    const {loading,message,error,users,orders} = useSelector(state=>state.admin)
    if(!loading){
        const orders = []
    }
    useEffect(()=>{
        if(message){
            toast.success(message)
            dispatch({type:"clearMessage"})
        }
        if(error){
            toast.success(error)
            dispatch({type:"clearError"})
        }
        dispatch(getAdminOrders())
    },[dispatch,message,error])
    function processHandler(id){
        dispatch(prcessOrders(id))
    }
  return (
    <section className='tableClass'>
        {loading?<Loader/>:
        <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    {/* <th>User</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(item=>(
                    <tr>
                    <td>{item._id}</td>
                    <td>{item.orderStatus}</td>
                    <td>{item.orderItems.cheeseBurger.qty+item.orderItems.vegCheeseBurger.qty+item.orderItems.doubleTikkiCheeseBurger.qty}</td>
                    <td>Rs {item.totalAmount}</td>
                    <td>{item.paymentMethod}</td>
                    {/* <td>Harshit</td> */}
                    <td>
                        <Link to={`/order/${item._id}`}><AiOutlineEye/></Link>
                        <button>
                            <GiArmoredBoomerang onClick={()=>processHandler(item._id)}/>
                        </button>
                    </td>

                </tr>
                ))}
            </tbody>
        </table>
    </main>}
    </section>
  )
}

export default Orders