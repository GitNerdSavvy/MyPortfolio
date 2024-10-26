import React from 'react'
import myImage from "../Footer/shape-bg.png"
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer-container">
         <div className="footer-parent">
            <img src={myImage} 
             alt='no img'
            /> 
        </div>

    </div>
  )
}
