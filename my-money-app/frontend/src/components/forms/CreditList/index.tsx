import { FormikErrors, getIn } from "formik";
import { ChangeEventHandler, FocusEventHandler } from "react";
import { BcRequestType } from "../../../contexts/BillingCyclesContext";
import Grid from "../../../Layout/Grid";
import Input from "../Input";
import { FormError, ThLeft } from "./styles";

interface CreditListProps{
    cols: string
    billingCycle?: BcRequestType
    readOnly?: boolean
    formikValues?: BcRequestType
    formikErros?: FormikErrors<BcRequestType> 
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
}

export default function CreditList(props: CreditListProps){
    const rows = props.formikValues?.credits?.length 
        ? props.formikValues?.credits : [{}] 

    function renderRows(){
        return rows.map((item, index) => (
            <tr key={item._id || '0'}>
                <td>
                    <Input
                        type="string"
                        name={`credits[${index}].name`}
                        readOnly={props.readOnly}
                        placeholder={item.name || 'Insert name'}
                        value={item.name || ''}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        />
                    <FormError>{getIn(props.formikErros, `credits[${index}].name`)}</FormError>
                </td>
                <td>
                    <Input
                        type="number"
                        name={`credits[${index}].value`}
                        readOnly={props.readOnly}
                        placeholder={item.value || 'Insert value'}
                        value={item.value || ''}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        />
                    <FormError>{getIn(props.formikErros, `credits[${index}].value`)}</FormError>
                </td>
                <td>
                    
                </td>
            </tr>
        ))
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