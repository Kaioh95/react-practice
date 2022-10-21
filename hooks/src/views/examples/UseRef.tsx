import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1: string, s2: string): string{
    return s1.split("").map(function(e, i){
        return `${e}${s2[i] || ""}`
    }).join("");
}

const UseRef = (props: any) => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");

    const count = useRef<number>(0);
    const input1 = useRef<HTMLInputElement>(null!);//! no final de null para remover erro
    const input2 = useRef<HTMLInputElement>(null!);

    useEffect(function() {
        count.current = count.current + 1
        input2.current.focus()
    }, [value1])

    useEffect(function() {
        count.current = count.current++
        input1.current.focus()
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    value={value1} onChange={e => setValue1(e.target.value)}
                    ref={input1}
                />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" 
                    value={value2} onChange={e => setValue2(e.target.value)}
                    ref={input2}
                />
            </div>
        </div>
    )
}

export default UseRef
