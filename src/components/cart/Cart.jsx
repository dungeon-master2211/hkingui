import React from 'react'
import bg1 from "../../assets/bg1.webp"
import bg2 from "../../assets/bg2.webp"
import bg3 from "../../assets/bg3.jpg"

import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({bg,qty,increment,decrement,title,price}) => {
    return <section className='cartItem'>
        <div>
            <img src={bg} alt="img" height={50} width={100}></img>
            <div className='qtyBtnGrp'>
                <button onClick={decrement}>-</button>
                <input type="number" value={qty} readOnly/>
                <button onClick={increment}>+</button>
            </div>
        </div>
        <div>
            <h3>{title}</h3>
            <h4>Rs. {price}</h4>

        </div>
    </section>
}
const Cart = () => {
    const dispatch = useDispatch()
    const {
        cartItems:{
            cheeseBurger,vegCheeseBurger,doubleTikkiCheeseBurger
        },
        subTotal,tax,shippingCharges,total
    } = useSelector(state=>state.cart)
    function inc(itemNo){
        switch (itemNo) {
            case 1:
                dispatch({
                    type:"cheeseBurgerInc",
                })
                break;
            case 2:
                dispatch({
                    type:"vegCheeseBurgerInc",
                })
                break;
            case 3:
                dispatch({
                    type:"doubleTikkiCheeseBurgerInc",
                })
                break;
        
            default:
                break;
        }
        dispatch({
            type:"setPrice"
        })
    }
    function dec(itemNo){
        switch (itemNo) {
            case 1:
                dispatch({
                    type:"cheeseBurgerDec",
                })
                break;
            case 2:
                dispatch({
                    type:"vegCheeseBurgerDec",
                })
                break;
            case 3:
                dispatch({
                    type:"doubleTikkiCheeseBurgerDec",
                })
                break;
        
            default:
                break;
        }
        dispatch({
            type:"setPrice"
        })
    }
    return (
        <section className='cart'>
            <main>
                <CartItem bg={bg1} title="Cheese Burger" qty={cheeseBurger.qty} 
                price={200} increment={()=>inc(1)} decrement={()=>dec(1)}/>
                <CartItem bg={bg2} title="Veg Cheese Burger" qty={vegCheeseBurger.qty} 
                price={500} increment={()=>inc(2)} decrement={()=>dec(2)}/>
                <CartItem bg={bg3} title="Double Tikki Cheese Burger" qty={doubleTikkiCheeseBurger.qty} 
                price={800} increment={()=>inc(3)} decrement={()=>dec(3)}/>
            </main>
            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>Rs. {subTotal}</p>
                </div>
                <div>
                    <h4>Tax</h4>
                    <p>Rs. {tax}</p>
                </div>
                <div>
                    <h4>Shipping Charges</h4>
                    <p>Rs. {shippingCharges}</p>
                </div>
                <div>
                    <h3>Total</h3>
                    <h4>Rs. {total}</h4>
                </div>
                
            </article>
            <Link to="/shipping">Checkout</Link>
        </section>
    )
}

export default Cart