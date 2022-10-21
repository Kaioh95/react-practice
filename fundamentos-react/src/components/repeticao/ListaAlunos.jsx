import alunos from "../../data/alunos"

export default function ListaAlunos(props){
    const lis = alunos.map((aluno, i) => {
        return(
            <li key={i}>
                <strong>{i+1}) {aluno.nome} -> {aluno.nota}</strong>
            </li>
        )
    });

    return(
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lis}
            </ul>
        </div>
    )
}