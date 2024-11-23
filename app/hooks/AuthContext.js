"use client"
import React, { createContext, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const authPaths = ["/login","/signup"];
    
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {(isLoggedIn && authPaths.includes(pathname)) ? router.replace("/") : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
