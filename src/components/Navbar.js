import "./Navbar.css"
import React from 'react'
import BulmaLogo from "../images/bulma-logo.png"
import CoolButton from "./CoolButton"

export default function Navbar({ onSignUpClick, onLoginClick }) {
  return (
    <div className="Navbar is-transparent">
      <div className="left-navbar navbarsides">
        <div><img className="bulmaLogo" src={BulmaLogo} alt="bulma-logo"></img></div>
        <div>Home</div>
      </div>
      <div className="right-navbar navbarsides">
      <CoolButton isInfo onClick={onLoginClick}>Login</CoolButton>
      <CoolButton isPrimary onClick={onSignUpClick}>Signup</CoolButton>
      </div>
      </div>
  )
}
