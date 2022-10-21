import If, { Else } from "./If";

export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return(
        <div>
            {/*<If test={usuario && usuario.nome}>
                Seja bem vindo(a), {usuario.nome}!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo(a), anônimo!
            </If>
            */}

            <If test={usuario && usuario.nome}>
                Seja bem vindo(a), <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo(a), <strong>anônimo</strong>!
                </Else>
            </If>

        </div>
    )
}