import Card from "../../Card"
import { connect } from 'react-redux'

interface SorteioProps{
    min: number
    max: number
}

function Sorteio(props: SorteioProps){
    const min = props.min
    const max = props.max
    const aleatorio = Math.floor(Math.random() * (max-min)) + min

    return(
        <Card title="Sorteio de um Número" color="purple">
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStoreToProps)(Sorteio)