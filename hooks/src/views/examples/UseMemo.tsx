import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a: number, b: number): number{
    const future = Date.now() + 1000
    while(Date.now() < future) {} // espera de 2s
    return a+b
}

const UseMemo = (props: any) => {
    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);
    const [n3, setN3] = useState<number>(0);

    const result = useMemo(() => sum(n1, n2), [n1, n2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />

            <div className="center">
                <input type="number" className="input"
                    value={n1} onChange={e=>setN1(parseInt(e.target.value))}
                />
                <input type="number" className="input"
                    value={n2} onChange={e=>setN2(parseInt(e.target.value))}
                />
                <input type="number" className="input"
                    value={n3} onChange={e=>setN3(parseInt(e.target.value))}
                />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
