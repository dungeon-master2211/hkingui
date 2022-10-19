import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    cartItems:{
        cheeseBurger:{
            qty:0,
            price:200
        },
        vegCheeseBurger:{
            qty:0,
            price:500
        },
        doubleTikkiCheeseBurger:{
            qty:0,
            price:800
        }
    },
    subTotal:0,
    tax:0,
    shippingCharges:0,
    total:0,
    shippingInfo:{}
}

export const cartReducer = createReducer(initialState,{

    cheeseBurgerInc : (state)=>{
        state.cartItems.cheeseBurger.qty+=1
        state.subTotal+=state.cartItems.cheeseBurger.qty*state.cartItems.cheeseBurger.price
    },
    vegCheeseBurgerInc : (state)=>{
        state.cartItems.vegCheeseBurger.qty+=1
    },
    doubleTikkiCheeseBurgerInc: (state)=>{
        state.cartItems.doubleTikkiCheeseBurger.qty+=1
    },
    cheeseBurgerDec : (state)=>{
        if(state.cartItems.cheeseBurger.qty) state.cartItems.cheeseBurger.qty-=1
    },
    vegCheeseBurgerDec : (state)=>{
        if(state.cartItems.vegCheeseBurger.qty) state.cartItems.vegCheeseBurger.qty-=1
    },
    doubleTikkiCheeseBurgerDec: (state)=>{
        if(state.cartItems.doubleTikkiCheeseBurger.qty) state.cartItems.doubleTikkiCheeseBurger.qty-=1
    },
    setPrice : (state)=>{
        state.subTotal=(state.cartItems.cheeseBurger.qty*state.cartItems.cheeseBurger.price
        +state.cartItems.vegCheeseBurger.qty*state.cartItems.vegCheeseBurger.price
        +state.cartItems.doubleTikkiCheeseBurger.qty*state.cartItems.doubleTikkiCheeseBurger.price)
        state.tax=state.subTotal*0.18
        state.shippingCharges=state.subTotal*0.012
        state.total=state.subTotal+state.tax+state.shippingCharges
    },
    emptyState:(state)=>{
        state.cartItems={
            cheeseBurger:{
                qty:0,
                price:200
            },
            vegCheeseBurger:{
                qty:0,
                price:500
            },
            doubleTikkiCheeseBurger:{
                qty:0,
                price:800
            }
        }
        state.subTotal=0
        state.tax=0
        state.shippingCharges=0
        state.total=0
    },
    addShippingInfo:(state,action)=>{
        state.shippingInfo = action.payload
    }
    

})

export const orderReducer = createReducer({},{
    createOrderStatus:(state)=>{
        state.loading = true
    },
    createOrderSuccess:(state,action)=>{
        state.loading = false
        state.message = action.payload
    },
    createOrderFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    paymentVerificationStatus:(state)=>{
        state.loading = true
    },
    paymentVerificationSuccess:(state,action)=>{
        state.loading = false
        state.message = action.payload
    },
    paymentVerificationFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    clearMessage :(state)=>{
        state.message=null
    },
    clearError :(state)=>{
        state.error=null
    }
})

export const myOrdersReducer = createReducer({
    orders:[]
    
},{
    getMyOrdersRequest:(state,action)=>{
        state.loading = true
    },
    getMyOrdersSuccess:(state,action)=>{
        state.loading = false
        state.orders = [...action.payload]
    },
    getMyOrdersFail:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    getOrderDetailsRequest:(state,action)=>{
        state.loading = true
    },
    getOrderDetailsSuccess:(state,action)=>{
        state.loading = false
        state.orders = action.payload
    },
    getOrderDetailsFail:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    clearMessage :(state)=>{
        state.message=null
    },
    clearError :(state)=>{
        state.error=null
    }

})