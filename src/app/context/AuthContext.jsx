'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { parse } from 'cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const cookies = parse(document.cookie)
    const sessionCookie = cookies.session
    console.log("cookies",cookies)
    if (sessionCookie) {
      setIsUserSignedIn(true)
      setToken(sessionCookie)
    } else {
      setIsUserSignedIn(false)
      setToken(null)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isUserSignedIn, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
