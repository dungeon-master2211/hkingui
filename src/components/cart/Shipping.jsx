import React,{useState} from 'react'
import {Country,State} from "country-state-city"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Shipping = () => {
    const [formData,setFormData] = useState({
        hNo:'',
        country:'',
        state:'',
        city:'',
        pincode:0,
        phoneNo:0
    })
    useEffect(()=>{
        const info = JSON.parse(localStorage.getItem("shippingInfo"))
        console.log(info)
        if(info) setFormData(info)
    },[])
    // console.log(formData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        dispatch({
            type:"addShippingInfo",
            payload:formData
        })
        localStorage.setItem("shippingInfo",JSON.stringify(formData))
        navigate("/confirmOrder")
    }
    
  return (
    <section className='shipping'>
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>House No.</label>
                    <input type="text" placeholder='House No.' name="hNo" value={formData.hNo}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    />
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" value={formData.country}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    >
                        <option value="Country">Country</option>
                        {Country && Country.getAllCountries().map(item=>(
                            <option value={item.isoCode} key={item.isoCode}>{item.name}</option>
                        ))}

                    </select>
                </div>
                {
                    formData.country && <div>
                    <label>State</label>
                    <select name="state" value={formData.state}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    >
                        <option value="State">State</option>
                        {State && State.getStatesOfCountry(formData.country).map(i=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))}
                    </select>
                </div>
                }
                <div>
                    <label>City</label>
                    <input type="text" placeholder='City' name="city" value={formData.city}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    />
                </div>
                
                
                <div>
                    <label>Pincode</label>
                    <input type="number" placeholder='221002' name="pincode" value={formData.pincode}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    />
                </div>
                <div>
                    <label>Phone No</label>
                    <input type="number" placeholder='7XXXXXXX10' name="phoneNo" value={formData.phoneNo}
                    onChange={(e)=>setFormData({
                        ...formData,[e.target.name]:e.target.value
                    })}
                    />
                </div>
                <button>Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping