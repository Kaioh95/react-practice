import { ReactNode } from "react"
import { ContentSection } from "./styles"

interface ContentProps{
    children: ReactNode
}

export default function Content(props: ContentProps){

    return(
        <ContentSection>{props.children}</ContentSection>
    )
}