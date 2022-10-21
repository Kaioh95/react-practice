import './Mega.css'
import React, {useState} from "react"

export default function Mega(props){
    const [numerosSorteados, setNumerosSorteados] = useState(Array(props.qtde || 7).fill(0))
    const [qtdNum, setQtdNum] = useState(props.qtde || 7)

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums)=>{
                const novoNum = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNum]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random()*(max+1-min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array): aleatorio
    }

    return(
        <div className='Mega'>
            <h1>Mega</h1>
            <div>
                {numerosSorteados.join(' ')}
            </div>
            <div>
                <label htmlFor="inputQtdNumeros">Qtde de Números: </label>
                <input
                    min="6"
                    max="15"
                    id="inputQtdNumeros"
                    type="number"
                    value={qtdNum}
                    onChange={e => {
                        setQtdNum(+e.target.value)
                        setNumerosSorteados(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={e => setNumerosSorteados(gerarNumeros(qtdNum))}>Gerar Número</button>
        </div>
    )
}