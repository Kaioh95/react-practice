import { ChangeEventHandler, FocusEventHandler } from "react";
import { BcRequestType } from "../../../contexts/BillingCyclesContext";
import Grid from "../../../Layout/Grid";
import Input from "../Input";
import { ThLeft } from "./styles";

interface CreditListProps{
    cols: string
    billingCycle?: BcRequestType
    readOnly?: boolean
    formikValues?: BcRequestType
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
}

export default function CreditList(props: CreditListProps){

    function renderRows(){
        return(
            <tr key={props.billingCycle?.credits?.[0]?._id || '0'}>
                <td>
                    <Input 
                        type="string"
                        name="credits[0].name"
                        readOnly={props.readOnly}
                        placeholder={props.formikValues?.credits?.[0]?.name || 'Insert name'}
                        value={props.formikValues?.credits?.[0]?.name || ''}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        />
                </td>
                <td>
                    <Input
                        type="number"
                        name="credits[0].value"
                        readOnly={props.readOnly}
                        placeholder={props.formikValues?.credits?.[0]?.value || 'Insert value'}
                        value={props.formikValues?.credits?.[0]?.value || ''}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        />
                </td>
                <td>
                    
                </td>
            </tr>
        )
    }

    const fieldSetStyle = {
        border: 0,
        margin: "0 8px",
    }

    return(
        <Grid cols={props.cols}>
            <fieldset style={fieldSetStyle} name="credits">
                <legend style={{fontSize: "25px"}}>Créditos</legend>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <ThLeft>Nome</ThLeft>
                            <ThLeft>Valor</ThLeft>
                            <ThLeft>Ações</ThLeft>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}