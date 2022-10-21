import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return(
        <div>
            <DiretaFilho nome="João" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Ana" idade={23} nerd={false}></DiretaFilho>
        </div>
    )
}