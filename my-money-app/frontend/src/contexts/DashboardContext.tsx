import { createContext, ReactNode, useReducer } from "react"
import { dashboardReducer } from "../store/DashboardReducer"
import { dashboardActions, initialState, URL } from "../constants"
import axios from "axios"

export interface DashboardContextType{
    summary: {credit: number, debt: number}
    getSummary?: () => void
}

interface DashboardContextProps{
    children: ReactNode
}

export const DashboardContext = createContext({} as DashboardContextType)

export const DashboardContextProvider = ({ children }: DashboardContextProps) => {
    const [state, dispatch] = useReducer(dashboardReducer, initialState)
    const summary = state.summary

    const getSummary = () => {
        axios.get(`${URL}/billingCycle/summary`)
            .then(resp => dispatch({ type: dashboardActions.SUMMARY_CHANGED, payload: resp.data}))
    }

    return(
        <DashboardContext.Provider value={{
            summary,
            getSummary
        }}>
            {children}
        </DashboardContext.Provider>
    )
}