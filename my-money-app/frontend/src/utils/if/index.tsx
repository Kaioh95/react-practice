import { ReactNode } from "react"

interface ifProps{
    test: boolean
    children: ReactNode
}

export default function If(props: ifProps){
    if(props.test){
        return props.children
    }
    else{
        return false
    }
}