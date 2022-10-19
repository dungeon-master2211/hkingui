import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import me from "../../assets/me.webp"
import { getAdminUsers } from '../../redux/actions/admin'
import Loader from '../layout/Loader'
const Users = () => {
    const dispatch = useDispatch()
    const {loading,users} = useSelector(state=>state.admin)
    useEffect(()=>{
        dispatch(getAdminUsers())
    },[dispatch])
  return (
    <section className='tableClass'>
        {loading?<Loader/>:
        <main>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                    
                </tr>
            </thead>
            <tbody>
                {users.map(item=>(
                    <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.photo} alt="profile-img" height="50px" width="50px"/>
                    </td>
                    <td>{item.role}</td>
                    <td>{item.createdAt}</td>
                    

                </tr>
                ))}
                
            </tbody>
        </table>
    </main>}
    </section>
  )
}

export default Users