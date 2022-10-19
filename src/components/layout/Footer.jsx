import React from 'react'
import {AiFillYoutube, AiFillInstagram, AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Burger King</h2>
            <p>The Taste You Deserve!</p>
            <strong>All Rights Reserved @BurgerKing</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <div>
                <a href="https://www.youtube.com"><AiFillYoutube/></a>
                <a href="https://www.youtube.com"><AiFillInstagram/></a>
                <a href="https://www.youtube.com"><AiFillGithub/></a>
            </div>
        </aside>
    </footer>
  )
}

export default Footer