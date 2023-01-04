import { useContext, useEffect, useRef } from "react"
import { AsideSideBar } from "./styles"
import { LayoutContext } from "../../contexts/LayoutContext"
import Menu from "../Menu"

interface SideBarProps{
    className?: string
}

export default function SideBar(props: SideBarProps){
    const context = useContext(LayoutContext)
    const { logoSize } = context
    const asideRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(asideRef){
            if(logoSize){
                asideRef.current!.style.width = '190px'
            }
            else{
                asideRef.current!.style.width = '0'
            }
        }
    }, [logoSize])
    
    return(
        <AsideSideBar className={props.className} ref={asideRef}>
                <Menu/>
        </AsideSideBar>
    )
}