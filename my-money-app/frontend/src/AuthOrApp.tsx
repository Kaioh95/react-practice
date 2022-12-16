import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "./contexts/AuthContext"
import AppPage from "./pages/AppPage"
import Auth from "./pages/Auth"

export default function AuthOrApp(){
    const authContext = useContext(AuthContext)
    const { user, validToken } = authContext

    useEffect(() => {
        if(user && user.token){
            authContext.validateToken(user.token)
        }
    }, [])

    const userAndToken = () => {
        if(user && validToken && user.token){
            axios.defaults.headers.common['authorization'] = user.token
            return <AppPage/>
        }
        else if(!user && !validToken){
            return <Auth/>
        }
        else{
            return false
        }
    }

    return(
        <>{userAndToken()}</>
    )
}