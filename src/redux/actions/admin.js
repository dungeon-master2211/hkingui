import axios from "axios";
import { server } from "../store";

export const getAdminStats = () =>async(dispatch)=>{
    try {
        dispatch({type:"getDashboardStatRequest"})
        const {data} = await axios.get(`${server}/admin/stats`,{
            withCredentials:true
        })
        console.log(data)
        dispatch({type:"getDashboardStatSuccess",payload:data})
    } catch (error) {
        dispatch({type:"getDashboardStatFail",payload:error.response.data.message})
    }
}

export const getAdminUsers = () =>async(dispatch)=>{
    try {
        dispatch({type:"getAdminUsersRequest"})
        const {data} = await axios.get(`${server}/admin/users`,{
            withCredentials:true
        })
        console.log(data)
        dispatch({type:"getAdminUsersSuccess",payload:data})
    } catch (error) {
        dispatch({type:"getAdminUsersSuccess",payload:error.response.data.message})
    }
}

export const getAdminOrders = () =>async(dispatch)=>{
    try {
        dispatch({type:"getAdminOrdersRequest"})
        const {data} = await axios.get(`${server}/admin/orders`,{
            withCredentials:true
        })
        console.log(data)
        dispatch({type:"getAdminOrdersSuccess",payload:data})
    } catch (error) {
        dispatch({type:"getAdminOrdersFail",payload:error.response.data.message})
    }
}

export const prcessOrders = (id) =>async(dispatch)=>{
    try {
        dispatch({type:"prcessOrdersRequest"})
        const {data} = await axios.get(`${server}/admin/order/${id}`,{
            withCredentials:true
        })
        // console.log(data)
        dispatch({type:"processOrdersSuccess",payload:data.message})
    } catch (error) {
        dispatch({type:"processOrdersFail",payload:error.response.data.message})
    }
}