import {createReducer} from "@reduxjs/toolkit"
const initialState = {}
export const authReducer = createReducer(initialState,{
    loadUserRequest:(state)=>{
        state.loading = true
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload
    },
    loadUserFail:(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    },
    logoutRequest:(state)=>{
        state.loading = true
    },
    logoutSuccess:(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.user = null
    },
    logoutFail:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.error = action.payload
    },
    sendMessageRequest:(state)=>{
        state.loading=true
    },
    sendMessageSuccess:(state,action)=>{
        state.loading=false
        state.message = action.payload
    },
    sendMessageFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    clearError:(state)=>{
        state.error = null
    },
    clearMessage:(state)=>{
        state.message = null
    }
})