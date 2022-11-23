import { createContext, ReactNode, useReducer } from "react";
import { tabReducer, INITIAL_STATE } from "../store/TabReducer"
import { tabActions, URL } from "../constants";

export interface TabContextType{
    selected: string
    visible?: { [key: string]: boolean }
    selectTab?: (tabId: string) => void
    showTabs?: (...tabIds: string[]) => void
}

export interface TabContextProps{
    children: ReactNode
}

export const TabContext = createContext({} as TabContextType)

export const TabContextProvider = ({ children }: TabContextProps) => {
    const [state, dispatch] = useReducer(tabReducer, INITIAL_STATE)
    const selected = state.selected
    const visible = state.visible

    const selectTab = (tabId: string) => {
        dispatch({ type: tabActions.TAB_SELECTED, payload: tabId})
    }


    const showTabs = (...tabIds: string[]) => {
        const tabsToShow: { [ key: string]: boolean } = {}
        tabIds.forEach(e => tabsToShow[e] = true);
        dispatch({ type: tabActions.TAB_SHOWED, payload: tabsToShow})
    }

    return(
        <TabContext.Provider value={{
            selected,
            visible,
            selectTab,
            showTabs
        }}>
            {children}
        </TabContext.Provider>
    )
}