import React, { useState, createContext } from 'react'

export const AuthenticatedContext = createContext();

export const Authentication = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </AuthenticatedContext.Provider>
    )
}
