import { tabActions } from "../constants"
import { TabContextType } from "../contexts/TabContext"

export const INITIAL_STATE = { 
    selected: '', visible: {}
}

type actionTab = {
    type: string
    payload?: any
}

export function tabReducer(state: TabContextType, action: actionTab){

    switch(action.type){
        case tabActions.TAB_SELECTED:
            return {...state, selected: action.payload}
        case tabActions.TAB_SHOWED:
            return {...state, visible: action.payload}
        default:
            console.log("NNNN")
            return state
    }

}