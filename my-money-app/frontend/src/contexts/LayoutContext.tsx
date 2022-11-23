import { ReactNode, createContext, useState } from 'react'

export interface LayoutContextType{
    logoSize: boolean
    changeLogoSize: () => void
}

interface LayoutContextProviderProps{
    children: ReactNode
}

export const LayoutContext = createContext({} as LayoutContextType)

export const LayoutContextProvider = ( { children }: LayoutContextProviderProps ) => {
    const [ logoSize, setLogoSize ] = useState<boolean>(true)

    const changeLogoSize = () => {
        if(logoSize){
            setLogoSize(false)
        }
        else{
            setLogoSize(true)
        }
    }

    return(
        <LayoutContext.Provider value={{logoSize, changeLogoSize}}>
            {children}
        </LayoutContext.Provider>
    )
}
