import { createContext, useContext, useState, useEffect } from "react";

import * as AuthSession from "expo-auth-session"

type User = {
    id: string
    name: string
    email: string
    photo?: string
}

interface AuthContextData {
    user: User
    signInWithGoogle: () => Promise<void>
}

interface GoogleAutorizationResponse {
    params: {
        access_token: string
    }
    type: string
}

const AuthContext = createContext({} as AuthContextData)

interface AuthContextProviderProps {
    children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState({} as User)

    async function signInWithGoogle() {
        try {
            const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
            const REDIRECT_URI = process.env.REDIRECT_URI
            const RESPONSE_TYPE = 'token'
            const SCOPE = encodeURI('profile email')

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            
            const { type, params } = await AuthSession.startAsync({ authUrl }) as GoogleAutorizationResponse

            if(type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)

                const userInfo = await response.json()

                console.log(userInfo)

                setUser({
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                })
            }

        } catch (err: any) {
            throw new Error(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)