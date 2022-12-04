import { ItemLink } from "./styles"

interface MenuItemProps{
    path: string
    icon: string
    label: string
}

export default function MenuItem(props: MenuItemProps){

    return(
        <li>
            <ItemLink href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            </ItemLink>
        </li>
    )
}