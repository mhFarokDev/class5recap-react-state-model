import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="logo"><h3>Logo</h3></div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/conatct">Contact</Link></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default Header