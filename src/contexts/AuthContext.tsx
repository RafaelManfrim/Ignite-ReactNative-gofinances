import { createContext, useContext, useState, useEffect } from "react";

import * as AuthSession from "expo-auth-session"
import * as AppleAuthentication from "expo-apple-authentication"
import AsyncStorage from "@react-native-async-storage/async-storage"

type User = {
    id: string
    name: string
    email: string
    photo?: string
}

interface AuthContextData {
    user: User
    signInWithGoogle: () => Promise<void>
    signInWithApple: () => Promise<void>
    signOut: () => Promise<void>
    userStorageLoading: boolean
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
    const [userStorageLoading, setUserStorageLoading] = useState(true)

    const userStorageKey = '@gofinances:user'

    async function signInWithGoogle() {
        try {
            const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
            const REDIRECT_URI = process.env.REDIRECT_URI
            const RESPONSE_TYPE = 'token'
            const SCOPE = encodeURI('profile email')

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession.startAsync({ authUrl }) as GoogleAutorizationResponse

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)

                const userInfo = await response.json()

                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                }

                setUser(userLogged)
                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
            }

        } catch (err: any) {
            throw new Error(err)
        }
    }

    async function signInWithApple() {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL
                ]
            })

            if (credential) {
                const userName = credential.fullName!.givenName!

                const userLogged = {
                    id: String(credential.user),
                    email: credential.email!,
                    name: userName,
                    photo: `https://ui-avatars.com/api/?name=${userName}&length=1`
                }

                setUser(userLogged)
                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
            }
        } catch (err: any) {
            throw new Error(err)
        }
    }

    async function signOut() {
        setUser({} as User)
        await AsyncStorage.removeItem(userStorageKey)
    }

    useEffect(() => {
        async function loadUserInStorage() {
            const userStoraged = await AsyncStorage.getItem(userStorageKey)

            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged)
                setUser(userLogged)
            }

            setUserStorageLoading(false)
        }

        loadUserInStorage()
    }, [])

    return (
        <AuthContext.Provider value={{ user, userStorageLoading, signInWithGoogle, signInWithApple, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)
