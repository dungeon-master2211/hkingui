import React from 'react'
import MenuCard from './MenuCard'
import bg1 from "../../assets/bg1.webp"
import bg2 from "../../assets/bg2.webp"
import bg3 from "../../assets/bg3.jpg"
import { useDispatch, useSelector } from 'react-redux'
import toast from "react-hot-toast"
const Menu = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const dispatch = useDispatch()
    function addToCartHandler(itemNum){
        switch (itemNum) {
          case 1:
            dispatch({type:"cheeseBurgerInc"})
            dispatch({type:"setPrice"})
            toast.success("Cheese Burger Added")
            break;
          case 2:
            dispatch({type:"vegCheeseBurgerInc"})
            dispatch({type:"setPrice"})
            toast.success("Veg Cheese Burger Added")
            break;
          case 3:
            dispatch({type:"doubleTikkiCheeseBurgerInc"})
            dispatch({type:"setPrice"})
            toast.success("Double Tikki Cheese Burger Added")
            break;
        
          default:
            break;
        }
    }
  return (
    <section className='menu' id="menu">
        <h1>MENU</h1>
        <div>
            <MenuCard 
            itemNum={1}
            bgSrc={bg1}
            title="Cheese Burger"
            price={200}
            handler={addToCartHandler}
            delay={0.1}
            showBtn = {cartItems.cheeseBurger.qty === 0}
            />
            <MenuCard 
            itemNum={2}
            bgSrc={bg2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCartHandler}
            delay={0.2}
            showBtn = {cartItems.vegCheeseBurger.qty === 0}
            />
            <MenuCard 
            itemNum={3}
            bgSrc={bg3}
            title="Double Tikki Cheese Burger"
            price={800}
            handler={addToCartHandler}
            delay={0.3}
            showBtn = {cartItems.doubleTikkiCheeseBurger.qty === 0}
            />
        </div>
    </section>
  )
}

export default Menu