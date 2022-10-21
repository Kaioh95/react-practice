import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default function TabelaProdutos(props){
    const produtosRows = produtos.map((produto, i)=>{
        return(
            <tr key={i} className={i%2===0? 'Par': ''}>
                <td>{i+1}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

    return(
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody >
                    {produtosRows}
                </tbody>
            </table>
        </div>
    )
}