import React from 'react'
import {motion} from "framer-motion"
import { useSelector } from 'react-redux'
const MenuCard = ({itemNum,bgSrc,price,title,handler,delay,showBtn}) => {
  
  return (
    <motion.div className='menuCard'
    initial={{
        x:"-100%",
        opacity:0
    }}
    whileInView={{
        x:"0",
        opacity:1
    }}
    transition={{delay}}
    >
        <div>Item {itemNum}</div>
        <main>
            <img src={bgSrc} alt={title} height={200} width={300}></img>
            <h3>{title}</h3>
            <h5>₹{price}</h5>
            {showBtn && <button onClick={()=>handler(itemNum)}>Add to Cart</button>}
        </main>
    </motion.div>
  )
}

export default MenuCard