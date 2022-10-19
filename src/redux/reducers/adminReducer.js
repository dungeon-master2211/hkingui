import { createReducer } from "@reduxjs/toolkit";


const initialstate = {
    usersCount :-1,
    ordersCount:{prepairing:[],shipped:[],delivered:[]},
    totalIncome:-1,
    orders:[],
    users:[]
}
export const adminReducer = createReducer(initialstate,{
    getDashboardStatRequest:(state) =>{
        state.loading = true
    },
    getDashboardStatSuccess:(state,action) =>{
        state.loading = false
        state.usersCount = action.payload.usersCount
        state.ordersCount = action.payload.ordersCount
        state.totalIncome = action.payload.totalIncome
    },
    getDashboardStatFail:(state,action) =>{
        state.loading = false
        state.error = action.payload
    },
    getAdminUsersRequest:(state) =>{
        state.loading = true
    },
    getAdminUsersSuccess:(state,action) =>{
        state.loading = false
        state.users = action.payload.users
    },
    getAdminUsersFail:(state,action) =>{
        state.loading = false
        state.error = action.payload
    },
    getAdminOrdersRequest:(state) =>{
        state.loading = true
    },
    getAdminOrdersSuccess:(state,action) =>{
        state.loading = false
        state.users = action.payload.users
        state.orders = action.payload.order
    },
    getAdminOrdersFail:(state,action) =>{
        state.loading = false
        state.error = action.payload
    },
    prcessOrdersRequest:(state) =>{
        state.loading = true
    },
    processOrdersSuccess:(state,action) =>{
        state.loading = false
        state.message=action.payload
    },
    processOrdersFail:(state,action) =>{
        state.loading = false
        state.error = action.payload
    },
    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message = null
    }
})

