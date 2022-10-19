import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/me.webp"
const Founder = () => {
    const option={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className='founder'>
        <motion.div {...option}>
            <img src={me} alt="founder" height={200} width={200} ></img>
            <h3>Harshit Srivastava (Founder)</h3>
            <p>Welcome's you to H King, Enjoy and lost in tastyland!</p>
        </motion.div>
    </section>
  )
}

export default Founder