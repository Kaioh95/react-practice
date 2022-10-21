import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props: any) => {

    // Ex 01
    const context = useContext(DataContext)

    function addNumber(delta: number){
        context.setState({
            ...context.state,
            number: context.state.number + delta,
        })
    }

    // Ex 02
    const {number, setNumber, text, setText} = useContext(AppContext)
    
    useEffect(function (){
        if(number >= 1250){
            setText("EITA!!!")
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle text="Exercício #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button className="btn" 
                        onClick={(e) => addNumber(-1)}>-1</button>
                    <button className="btn" 
                        onClick={(e) => addNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle text="Exercício #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}
                    >-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}
                    >+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
