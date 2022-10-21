import { ReactNode } from 'react'
import { CardContainer, CardContent, CardHeader, CardTitle } from './styles'
import "./styles.css"

interface CardProps{
    title?: string
    color?: 'red' | 'green' | 'blue' |  'purple'
    children?: ReactNode
}

function getColor(color: string | undefined){
    if(color === 'red') return "RedHeader RedContent"
    if(color === 'green') return "GreenHeader GreenContent"
    if(color === 'blue') return "BlueHeader BlueContent"
    if(color === 'purple') return "PurpleHeader PurpleContent"
    return ''
}

export default function Card(props: CardProps){

    return(
        <CardContainer className="App">
            <CardHeader className={getColor(props.color).split(" ")[0]}>
                <CardTitle className="text">{props.title}</CardTitle>
            </CardHeader>
            <CardContent className={getColor(props.color).split(" ")[1]}>
                {props.children}
            </CardContent>
        </CardContainer>
    )
}