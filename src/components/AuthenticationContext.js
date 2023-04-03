import { createContext, useEffect, useState } from 'react'

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
    let [isAuthenticated, setIsAuthenticated] = useState(null)

    async function checkAuth() {
        try {
            let response = await fetch('/api/authenticate')
            let json = await response.json()

            setIsAuthenticated(json.success)
        } catch(e) {
            console.log(e)
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    let value = {
        isAuthenticated,
    }

    return <AuthenticationContext.Provider value={ value }>
        { children }
    </AuthenticationContext.Provider>
}