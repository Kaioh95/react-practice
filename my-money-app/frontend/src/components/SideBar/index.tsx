import { useContext, useEffect, useRef } from "react"
import { AsideSideBar } from "./styles"
import { LayoutContext } from "../../contexts/LayoutContext"
import Menu from "../Menu"

export default function SideBar(){
    const context = useContext(LayoutContext)
    const { logoSize } = context
    const asideRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(asideRef){
            if(logoSize){
                asideRef.current!.style.width = '12rem'
            }
            else{
                asideRef.current!.style.width = '3rem'
            }
        }
    }, [logoSize])
    
    return(
        <AsideSideBar ref={asideRef}>
            <section>
                <Menu/>
            </section>
        </AsideSideBar>
    )
}