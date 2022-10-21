
export default function IndiretaFilho(props){
    const cb = props.quandoClicar
    const min = 30
    const max = 80
    const gerarIdade = () => parseInt(Math.random()*(max-min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return(
        <div>
            <div>Filho</div>
            <button onClick={ e => {cb("João", gerarIdade(), gerarNerd())}}>
                Fornecer Informações
            </button>
        </div>
    )
}