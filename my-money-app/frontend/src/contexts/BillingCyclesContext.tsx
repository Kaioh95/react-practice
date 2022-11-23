import axios from "axios"
import { createContext, ReactNode, useReducer } from "react"
import { billingCyclesActions, URL } from "../constants"
import { billingCyclesReducer, INITIAL_STATE } from "../store/BillingCyclesReducer"


export interface BillingCyclesContextType{
    list: Array<{[key: string]: string|number}>
    getList?: () => void
}

interface BillingCyclesContextProps{
    children: ReactNode
}

export const BillingCyclesContext = createContext({} as BillingCyclesContextType)

export const BillingCyclesContextProvider = ({ children }: BillingCyclesContextProps) => {
    const [state, dispatch] = useReducer(billingCyclesReducer, INITIAL_STATE)
    const list = state.list

    const getList = () => {
        axios.get(`${URL}/billingCycle`)
            .then(resp => dispatch({ type: billingCyclesActions.BILLING_CYCLES_FETCHED, payload: resp.data.billingCycles}))
    }

    return(
        <BillingCyclesContext.Provider
            value={{
                list,
                getList
            }}
        >
            {children}
        </BillingCyclesContext.Provider>
    )
}