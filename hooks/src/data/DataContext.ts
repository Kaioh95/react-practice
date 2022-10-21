import React from "react";

export interface DataContextProps{
    number: number,
    text: string,
}

export const data = {
    number: 123,
    text: "Context API...",
}

//const DataContext = React.createContext<DataContextProps>(data)
const DataContext = React.createContext<any>(null!)

export default DataContext;