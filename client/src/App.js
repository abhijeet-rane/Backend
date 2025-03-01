"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RestaurantList from "./components/RestaurantList"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import "./styles/global.css"

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    if (token) {
      fetchUserProfile(token)
    }

    // Fetch restaurants
    fetchRestaurants()
  }, [])

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data)
      } else {
        localStorage.removeItem("token")
      }
    } catch (error) {
      console.error("Error fetching user profile:", error)
      localStorage.removeItem("token")
    }
  }

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/restaurants")
      const data = await response.json()
      setRestaurants(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching restaurants:", error)
      setLoading(false)
    }
  }

  const handleLogin = (userData) => {
    setUser(userData)
    setShowLogin(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <div className="app">
      <Header
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <main className="container">
        <RestaurantList restaurants={restaurants} loading={loading} />
      </main>
      <Footer />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLogin}
          onSignupClick={() => {
            setShowLogin(false)
            setShowSignup(true)
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={() => {
            setShowSignup(false)
            setShowLogin(true)
          }}
          onLoginClick={() => {
            setShowSignup(false)
            setShowLogin(true)
          }}
        />
      )}
    </div>
  )
}

export default App

