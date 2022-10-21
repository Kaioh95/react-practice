import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "Context API + Hooks"
}

export const AppContext = React.createContext<any>(initialState);

export default function Store(props: any){
    const [state, setState] = useState<any>(initialState);

    function updateState(key: string, value: number | string){
        setState({
            ...state,
            [key]: value
        })
    }

    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: (n: number) => updateState("number", n),
            setText: (t: string) => updateState("text", t),
        }}>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
    )
}