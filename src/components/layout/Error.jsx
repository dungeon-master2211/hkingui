import React from 'react'
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section className='notFound'>
        <main>
            <div>
                <MdError/>
                <h3>404</h3>
            </div>
            <h2>OOPS, Thing You are looking is not here! Go To below link</h2>
            <Link to="/">Homepage</Link>
        </main>
    </section>
  )
}

export default Error