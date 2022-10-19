import {configureStore} from "@reduxjs/toolkit"
import { adminReducer } from "./reducers/adminReducer"
import { cartReducer, myOrdersReducer, orderReducer } from "./reducers/cartReducer"
import { authReducer } from "./reducers/userReducer"

const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        myorder:myOrdersReducer,
        admin:adminReducer
    }
})

export default store

export const server = "https://harshitbking.herokuapp.com/api/v1"