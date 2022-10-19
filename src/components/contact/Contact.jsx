import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { sendMessage } from '../../redux/actions/user'
const Contact = () => {
  const [btn,setBtn] = useState(false)
  const dispatch = useDispatch()
  const {message,error} = useSelector(state=>state.auth)
  useEffect(()=>{
    setBtn(false)
    if(message){
      toast.success(message)
      dispatch({type:"clearMessage"})
    }
    if(error){
      toast.error(error)
      dispatch({type:"clearError"})
    }
  },[dispatch,message,error])
  const [body,setBody] = useState({
    name:'',
    email:'',
    message:''
  })
  function messageHandler(e){
    e.preventDefault()
    const {name,email,message} = body
    if(!name || !email || !message){
      toast.error("Please fill all fields")
      return 
    }
    // console.log(body)
    dispatch(sendMessage(body))
    setBtn(true)
  }
  return (
    <section className='contact'>
        <motion.form initial={{x:"-100%",opacity:0}} whileInView={{x:"0",opacity:1}}>
          
            <h2>Contact Us</h2>
            <input type="text" placeholder="Name" name="name" required value={body.name} onChange={(e)=>setBody(prev=>({
              ...prev,
              [e.target.name]:e.target.value
            }))}></input>
            <input type="email" placeholder='ab@xyz.com' name="email" required value={body.email} onChange={(e)=>setBody(prev=>({
              ...prev,
              [e.target.name]:e.target.value
            }))}></input>
            <textarea name="message" rows={20} cols={30} required value={body.message} onChange={(e)=>setBody(prev=>({
              ...prev,
              [e.target.name]:e.target.value
            }))}></textarea>
            <button type="submit" disabled={btn} onClick={(e)=>messageHandler(e)}>Send</button>
            
        </motion.form>
    </section>
  )
}

export default Contact