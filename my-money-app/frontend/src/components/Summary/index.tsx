import ValueBox from "../widget/ValueBox"
import { Legend } from "./styles"

interface SummaryProps{
    credit: number
    debt: number
}

export default function Summary({credit, debt}: SummaryProps){

    return(
        <div style={{margin: "15px 0"}}>
            <Legend>Resumo</Legend>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <ValueBox cols='12 4' color='#31E981'
                    icon='bank' value={`R$ ${credit}`}
                    text='Total de Créditos'/>
                <ValueBox cols='12 4' color='#F72585'
                    icon='credit-card' value={`R$ ${debt}`}
                    text='Total de Débitos'/>
                <ValueBox cols='12 4' color='#4361EE'
                    icon='money' value={`R$ ${credit - debt}`}
                    text='Valor Consolidado'/>
            </div>
        </div>
    )
}