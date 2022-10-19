import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import me from "../../assets/me.webp"
import { logout } from '../../redux/actions/user'

import { useSelector } from 'react-redux'
import Loader from '../layout/Loader'
const Profile = () => {
    const option={
        initial:{
            y:"-100%",
            opacity:0
        },
        animate:{
                y:0,
                opacity:1
        }
    }
    const dispatch = useDispatch()
    const {loading,user} = useSelector(state=>state.auth)
    const logoutHandler = ()=>{
        dispatch(logout())
    }
  return (
    <section className='profile'>
        {loading===false?<main>
            <motion.img src={user.photo} {...option} alt="profile image" height={200} width={200}/>
            <motion.h5 {...option} transition={{delay:0.2}}>
                {user.name}
            </motion.h5>
            {user.role==='admin' && <motion.div {...option} transition={{delay:0.3}}>
                <Link to="/admin/dashboard">Dashboard</Link>
            </motion.div>}
            <motion.div initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5}}>
                <Link to="/myOrder">My Orders</Link>
            </motion.div>
            <motion.button initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} onClick={logoutHandler}>
                Logout
            </motion.button>
        </main>:<Loader/>}
    </section>
  )
}

export default Profile