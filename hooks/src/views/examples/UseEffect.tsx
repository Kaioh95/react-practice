import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n: number): number{
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = (props: any) => {
    const [number, setNumber] = useState<number>(1)
    const [fatorial, setFatorial] = useState<number>(1)
    const [parity, setParity] = useState<string>("Ímpar")
    
    useEffect(function(){
        setFatorial(calcFatorial(number))
        setParity(number % 2 === 0? "Par" : "Ímpar")
    }, [number])

    useEffect(function(){
        if(fatorial>100000){
            document.title = "Eita!!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1? 'Não Existe!' : fatorial}</span>
                </div>
                <input type="number" className="input" 
                    value={number} 
                    onChange={e => {setNumber(+e.target.value)}}
                />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Paridade: </span>
                    <span className="text red">{parity}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
