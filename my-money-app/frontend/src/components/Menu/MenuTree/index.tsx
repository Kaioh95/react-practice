import { ReactNode, useState } from "react"
import { ItemLink, UlTree } from "./styles"

interface MenuTreeProps{
    path?: string
    icon: string
    label: string
    children?: ReactNode
}

export default function MenuTree(props: MenuTreeProps){
    const [menuDisplay, setMenuDisplay] = useState<string>('none')

    const changeDisplay = () => {
        if(menuDisplay === "none")
            setMenuDisplay("block")
        else if(menuDisplay === "block")
            setMenuDisplay("none")
    }

    return(
        <li>
            <ItemLink onClick={changeDisplay}>
                <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
                <i className={`fa fa-angle-left`} style={{float: "right", margin: "3px 0"}}></i>
            </ItemLink>
            <UlTree style={{ display: menuDisplay }}>
                {props.children}
            </UlTree>
        </li>
    )
}