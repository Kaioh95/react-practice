import Card from "../../Card"
import { connect } from 'react-redux'

interface MediaProps{
    min: number
    max: number
}

function Media(props: MediaProps){
    const min = props.min
    const max = props.max

    return(
        <Card title="Média dos Números" color="green">
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min+max)/2}</strong>
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

export default connect(mapStoreToProps)(Media)