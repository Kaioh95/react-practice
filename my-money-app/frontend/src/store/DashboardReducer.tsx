import { DashboardContextType } from "../contexts/DashboardContext"
import { dashboardActions } from "../constants"

type actionType = {
    type: string
    payload?: any
}

export function dashboardReducer(state: DashboardContextType, action: actionType){
    
    switch(action.type){
        case dashboardActions.SUMMARY_CHANGED:
            return{...state, summary: action.payload}
        default:
            console.log("NNNNNNNNNNNNNN")
            return state
    }
}