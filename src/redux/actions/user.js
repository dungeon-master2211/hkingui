import axios from "axios"

import { server } from "../store"

export const loadUser = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"loadUserRequest"
        })

        const {data} = await axios.get(`${server}/me`,{
            withCredentials:true
        })

        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loadUserFail",
            payload:error.response.data.message
        })
    }
}

export const logout = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"logoutRequest"
        })

        await axios.get(`${server}/logout`,{
            withCredentials:true
        })

        dispatch({
            type:"logoutSuccess",
            
        })
    } catch (error) {
        dispatch({
            type:"logoutFail",
            payload:error.response.data.message
        })
    }
}

export const sendMessage = (body)=>async(dispatch)=>{
    try {
        dispatch({type:"sendMessageRequest"})
        const {data} = await axios.post(`${server}/send`,{
            ...body
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        dispatch({type:"sendMessageSuccess",payload:data.message})
    } catch (error) {
        dispatch({type:"sendMessageFail",payload:error.response.data.message})
    }
}