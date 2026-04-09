import React from 'react'
import "./Button.scss"
import teeth from "../../assets/header/tooth.png"
import { Link } from 'react-router-dom'
const Button = ({text,path}) => {
  return (
    <>
      <Link to={path || "/contact"} class="btn">
        <span>
            <img src={teeth} alt=""/>
        </span>
        <p> {text || "Contact Us"}</p>
      </Link>
    </>
  )
}

export default Button
