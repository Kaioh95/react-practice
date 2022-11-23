import { isPropertySignature } from "typescript";

interface ContentHeaderProps{
    title: string
    small: string
}

export default function ContentHeader(props: ContentHeaderProps){

    return(
        <section>
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    )
}