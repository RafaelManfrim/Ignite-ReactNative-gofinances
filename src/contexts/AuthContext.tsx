import { createContext, useContext } from "react";

type User = {
    id: string
    name: string
    email: string
    photo?: string
}

interface AuthContextData {
    user: User
}

const AuthContext = createContext({} as AuthContextData)

interface AuthContextProviderProps {
    children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {



    const user = { id: "123213-1242342", name: "Rafael", email: 'rafaelmanfrim2004@gmail.com'}

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)