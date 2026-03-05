import React from 'react'
import "./Button.scss"
import teeth from "../../assets/header/tooth.png"
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <>
      <Link to="/" class="btn">
        <span>
            <img src={teeth} alt=""/>
        </span>
        <p>Contact Us</p>
      </Link>
    </>
  )
}

export default Button
