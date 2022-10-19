import React from 'react'
import { Link } from 'react-router-dom'
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from "chart.js"
import {Doughnut} from "react-chartjs-2"
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getAdminStats} from '../../redux/actions/admin'
ChartJS.register(ArcElement,Tooltip,Legend);
const Box = ({title,value})=>(
    <div>
        <h3>{value}</h3>
        <p>{title}</p>
    </div>
)
const Dashboard = () => {
    const {loading,error,usersCount,ordersCount,totalIncome} = useSelector(state=>state.admin)
    const dispatch = useDispatch()
    useEffect(()=>{
        
        dispatch(getAdminStats())
    },[dispatch])
    const data = loading?
    {
        labels:['Pending','Shipped','Completed'],
        datasets:[{
        label:'# of Orders',
        data:[2,3,4],
        backgroundColor:['pink','tomato','blue'],
        borderColor:['pink','tomato','blue'],
        borderWidth:1
        }]
    }:
    {
        labels:['Pending','Shipped','Completed'],
        datasets:[{
        label:'# of Orders',
        data:[ordersCount.prepairing.length,ordersCount.shipped.length,ordersCount.delivered.length],
        backgroundColor:['pink','tomato','blue'],
        borderColor:['pink','tomato','blue'],
        borderWidth:1
        }]
    }
    
  return (
    <section className='dashboard'>
        {loading && usersCount===-1 && totalIncome===-1?<Loader/>:
        <main>
        <article>
            <Box title="Users" value={usersCount}/>
            <Box title="Orders" value={ordersCount.totalOrders}/>
            <Box title="Income" value={Math.round(totalIncome*10)/10}/>
        </article>
        <section>
            <div>
                <Link to="/admin/orders">View Orders</Link>
                <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
                <Doughnut data={data}/>
            </aside>
        </section>
    </main>
        }
    </section>
  )
}

export default Dashboard