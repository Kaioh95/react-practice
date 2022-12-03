import { BillingCyclesContextType } from "../contexts/BillingCyclesContext"
import { billingCyclesActions } from "../constants"

export const INITIAL_STATE={
    list: [],
    bcToUpdate: {
        name: '',
        month: '',
        year: '',
    }
}

type actionBillingCycles = {
    type: string
    payload: any
}

export function billingCyclesReducer(state: BillingCyclesContextType, action: actionBillingCycles){

    switch(action.type){
        case billingCyclesActions.BILLING_CYCLES_FETCHED:
            return {...state, list: action.payload}
        case billingCyclesActions.BC_UPDATE:
            return {...state, bcToUpdate: action.payload}
        default:
            console.log("BILLING CYCLE DEFAULT")
            return state
    }
}