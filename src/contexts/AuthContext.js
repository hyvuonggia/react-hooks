import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    //State
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated)
    }

    //useEffect
    useEffect(() => {
        alert(isAuthenticated ? 'Login successful': 'Please log in')
    }, [isAuthenticated])

    //context data
    const authContextData = {
        isAuthenticated: isAuthenticated,
        toggleAuth: toggleAuth
    }

    //return
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider