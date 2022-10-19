import { motion } from 'framer-motion'
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { server } from '../../redux/store'
const Login = () => {
  function loginButton(){
    window.open(`${server}/googleauth`,"_self")
  }
  return (
    <section className='login'>
        
        <motion.button initial={{y:"-100%",opacity:0}} animate={{y:"0",opacity:1}} onClick={loginButton}>
            Login with Google<FcGoogle/>
        </motion.button>
        
    </section>
  )
}

export default Login