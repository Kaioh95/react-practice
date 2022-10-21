import Card from "../Card"
import { Input } from "./styles"
import { connect } from 'react-redux'
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../../store/actions/numeros'

interface IntervaloProps{
    min: number
    max: number
    onChangeMin?: (n: number) => void
    onChangeMax?: (n: number) => void
}

function Intervalo(props: IntervaloProps){
    const min = props.min
    const max = props.max

    return(
        <Card title="Intervalo de Números" color="red">
            <div>
                <span>
                    <strong>Mínimo:</strong>
                    <Input type="number" value={min} onChange={e => props.onChangeMin?.(+e.target.value)}></Input>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <Input type="number" value={max} onChange={e => props.onChangeMax?.(+e.target.value)}></Input>
                </span>
            </div>
        </Card>
    )
}

function mapStoreToProps(state: any){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProps(dispatch: any){
    return{
        onChangeMin(n: number){
            const action = alterarNumeroMinimo(n)
            dispatch(action)
        },
        onChangeMax(n: number){
            const action = alterarNumeroMaximo(n)
            dispatch(action)
        },
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Intervalo)