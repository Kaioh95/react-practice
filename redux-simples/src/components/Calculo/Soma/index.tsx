import Card from "../../Card"
import { connect } from 'react-redux'

interface SomaProps{
    min: number
    max: number
}

function Soma(props: SomaProps){
    const min = props.min
    const max = props.max

    return(
        <Card title="Soma dos Números" color="blue">
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
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

export default connect(mapStoreToProps)(Soma)