import { useContext, useEffect } from "react"
import { MainDiv } from "./styles"

import ContentHeader from "../../components/ContentHeader"
import Content from "../../components/Content"
import ValueBox from "../../components/widget/ValueBox"
import { DashboardContext } from "../../contexts/DashboardContext"

export default function DashBoard(){
    const context = useContext(DashboardContext)
    const {summary, getSummary} = context

    useEffect(() => {
        getSummary?.()
    }, [])

    return(
        <MainDiv>
            <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
            <Content>
                <ValueBox cols='12 4' color='#31E981'
                    icon='bank' value={`R$ ${summary.credit}`}
                    text='Total de Créditos'/>
                <ValueBox cols='12 4' color='#F72585'
                    icon='credit-card' value={`R$ ${summary.debt}`}
                    text='Total de Débitos'/>
                <ValueBox cols='12 4' color='#4361EE'
                    icon='money' value={`R$ ${summary.credit - summary.debt}`}
                    text='Valor Consolidado'/>
            </Content>
        </MainDiv>
    )
}
