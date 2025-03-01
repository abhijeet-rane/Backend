"use client"

import { useState } from "react"
import "../styles/header.css"

function Header({ user, onLoginClick, onSignupClick, onLogout }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Zomato" />
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Add Restaurant
          </a>
          <a href="#" className="nav-link">
            Orders
          </a>
        </div>

        <div className="auth-buttons">
          {user ? (
            <>
              <span>Hi, {user.name}</span>
              <button className="btn btn-outline" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={onLoginClick}>
                Login
              </button>
              <button className="btn btn-primary" onClick={onSignupClick}>
                Sign up
              </button>
            </>
          )}
        </div>

        <div className="mobile-menu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <i className={`fas ${showMobileMenu ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Add Restaurant
          </a>
          <a href="#" className="nav-link">
            Orders
          </a>

          {user ? (
            <>
              <span>Hi, {user.name}</span>
              <button className="btn btn-outline" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={onLoginClick}>
                Login
              </button>
              <button className="btn btn-primary" onClick={onSignupClick}>
                Sign up
              </button>
            </>
          )}
        </div>
      )}
    </header>
  )
}

export default Header

