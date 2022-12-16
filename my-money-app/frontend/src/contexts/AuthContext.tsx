import axios from "axios";
import { createContext, ReactNode, useReducer } from "react";
import { toast } from "react-toastify";
import { OAPI_URL } from "../constants";
import authReducer, { authActions, INITIAL_STATE } from "../store/authReducer";

export interface AuthRequestType{
    _id?: string
    name?: string
    email: string
    password: string
    confirmPassword?: string
    createdAt?: string
    updatedAt?: string
    token?: string
}

export interface AuthContextType{
    user: AuthRequestType
    validToken: boolean
    login: (values: AuthRequestType) => void
    signup: (values: AuthRequestType) => void
    logout: () => void
    validateToken: (token: string) => void
}

interface AuthContextProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({children}: AuthContextProps) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)
    const user = state.user
    const validToken = state.validToken

    const submit = (values: AuthRequestType, url: string) => {
        axios.post(url, values)
            .then(resp => {
                dispatch({ type: authActions.USER_FETCHED, payload: resp.data })
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    (error: string) => toast.error(error)
                )
            })
    }

    const login = (values: AuthRequestType) => {
        return submit(values, `${OAPI_URL}/login`)
    }

    const signup = (values: AuthRequestType) => {
        return submit(values, `${OAPI_URL}/signup`)
    }

    const logout = () => {
        return dispatch({ type: authActions.TOKEN_VALIDATED, payload: false })
    }

    const validateToken = (token: string) => {
        if(token){
            axios.post(`${OAPI_URL}/validateToken`, { token })
                .then( resp => {
                    dispatch({ type: authActions.TOKEN_VALIDATED, payload: resp.data.valid})
                })
                .catch(e => dispatch({type: authActions.TOKEN_VALIDATED, payload: false}))
        }else {
            dispatch({type: authActions.TOKEN_VALIDATED, payload: false})
        }
    }

    return(
        <AuthContext.Provider value={{
            user,
            validToken,
            login,
            signup,
            logout,
            validateToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}