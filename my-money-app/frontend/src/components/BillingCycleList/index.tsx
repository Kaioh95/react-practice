import { useContext, useEffect } from "react";
import { BillingCyclesContext } from "../../contexts/BillingCyclesContext";
import { Table, ThLeft } from "./styles";

export default function BillingCycleList(){
    const billingCycleContext = useContext(BillingCyclesContext)
    const { list, getList } = billingCycleContext

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
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </Table>
        </div>
    )
}