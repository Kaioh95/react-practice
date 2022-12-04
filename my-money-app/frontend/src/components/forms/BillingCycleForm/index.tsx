import { Formik, FormikHelpers, FormikValues, Field, ErrorMessage} from "formik";
import { useContext } from "react";
import { BcRequestType, BillingCyclesContext } from "../../../contexts/BillingCyclesContext";
import { BillingCycleSchema } from "../../../schemas/BillingCycleSchema";
import Summary from "../../Summary";
import ItemList from "../ItemList";
import LabelAndInput from "../LabelAndInput";
import { BCForm, BoxBody, BoxFooter, SubmitButton, FormError, BtnDanger, ItemListSection } from "./styles";

interface BillingCycleFormProps{
    method?: (values: BcRequestType) => void
    submitClass?: string
    submitLabel?: string
    readOnly?: boolean
}

export interface BCFormValues extends FormikValues{
    name: string;
    month: string;
    year: string;
}

export default function BillingCycleForm(props: BillingCycleFormProps){
    const bcContext = useContext(BillingCyclesContext)

    const onSubmit = async (values: BcRequestType, actions: FormikHelpers<BcRequestType>) => {
        const bcUp = bcContext.bcToUpdate
        props.method?.({...bcUp,
            name: values.name,
            month: values.month,
            year: values.year,
            credits: values.credits,
            debts: values.debts
        })
        actions.resetForm()
    }

    function calcSum(values: Array<{[key: string]: string}> = [{value:"0"}]){
        const sum = (t: number, v: number) => t + v
        return values.map(c => +c.value || 0).reduce(sum, 0)
    }

    return(
        <Formik
            initialValues={{
                name: bcContext.bcToUpdate.name,
                month: bcContext.bcToUpdate.month,
                year: bcContext.bcToUpdate.year,
                credits: bcContext.bcToUpdate.credits,
                debts: bcContext.bcToUpdate.debts
            }}
            validationSchema={BillingCycleSchema}
            onSubmit={onSubmit}
        >
        {({values}) => (
        <BCForm>
            <BoxBody>
                <Field name="name"
                    type="text"
                    readOnly={props.readOnly}
                    placeholder="Insert Name"
                    as={LabelAndInput}/>
                <ErrorMessage component={FormError} name="name"/>

                <Field name="month"
                    type="number"
                    readOnly={props.readOnly}
                    placeholder="Insert Month"
                    as={LabelAndInput}/>
                <ErrorMessage component={FormError} name="month"/>
                
                <Field name="year"
                    type="number"
                    readOnly={props.readOnly}
                    placeholder="Insert Year"
                    as={LabelAndInput}/>
                <ErrorMessage component={FormError} name="year"/>

                <Summary 
                    credit={calcSum(values.credits)} 
                    debt={calcSum(values.debts)}/>
                
                <ItemListSection>
                    <ItemList 
                        cols="12 6"
                        field="credits"
                        legend="Créditos"
                        readOnly={props.readOnly}/>
                    <ItemList 
                        cols="12 6"
                        field="debts"
                        legend="Déditos"
                        showStatus
                        readOnly={props.readOnly}/>
                </ItemListSection>
            </BoxBody>
            <BoxFooter>
                <SubmitButton
                    type="submit"
                    className={props.submitClass}
                >
                        {props.submitLabel}
                </SubmitButton>
                <BtnDanger type="button" onClick={() => bcContext.init?.()}>Cancelar</BtnDanger>
            </BoxFooter>
        </BCForm>)}
        </Formik>
    )
}