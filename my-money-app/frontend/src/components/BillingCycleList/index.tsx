import { useContext, useEffect } from "react";
import { BillingCyclesContext } from "../../contexts/BillingCyclesContext";
import { BtnDanger, BtnWarning, Table, ThLeft } from "./styles";

export default function BillingCycleList(){
    const billingCycleContext = useContext(BillingCyclesContext)
    const { list, getList, showUpdate, showDelete} = billingCycleContext

    useEffect(() => {
        getList?.()
    },[])

    function renderRows() {
        const listCycles = list || []

        return listCycles.map((bc, i) => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <BtnWarning onClick={() => showUpdate?.(bc)}>
                        <i className="fa fa-pencil"></i>
                    </BtnWarning>
                    <BtnDanger onClick={() => showDelete?.(bc)}>
                        <i className="fa fa-trash-o"></i>
                    </BtnDanger>
                </td>
            </tr>
        ))
    }

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <ThLeft>Nome</ThLeft>
                        <ThLeft>Mês</ThLeft>
                        <ThLeft>Ano</ThLeft>
                        <ThLeft style={{width: "125px"}}>Ações</ThLeft>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </Table>
        </div>
    )
}