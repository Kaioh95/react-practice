import { useFormik, FormikHelpers, FormikValues } from "formik";
import { useContext } from "react";
import { BcRequestType, BillingCyclesContext } from "../../../contexts/BillingCyclesContext";
import { BillingCycleSchema } from "../../../schemas/BillingCycleSchema";
import CreditList from "../CreditList";
import LabelAndInput from "../LabelAndInput";
import { BCForm, BoxBody, BoxFooter, SubmitButton, FormError, BtnDanger, CreditSection } from "./styles";

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
            year: values.year
        })
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues:{
            name: bcContext.bcToUpdate.name,
            month: bcContext.bcToUpdate.month,
            year: bcContext.bcToUpdate.year,
        },
        validationSchema: BillingCycleSchema,
        onSubmit,
    })

    
    return(
        <BCForm onSubmit={formik.handleSubmit}>
            <BoxBody>
                <LabelAndInput name="name" type="text"
                    readOnly={props.readOnly}
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                <FormError>{formik.errors.name}</FormError>

                <LabelAndInput name="month" type="number"
                    readOnly={props.readOnly}
                    placeholder="Insert month"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                <FormError>{formik.errors.month}</FormError>
                
                <LabelAndInput name="year" type="number"
                    readOnly={props.readOnly}
                    placeholder="Insert year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                <FormError>{formik.errors.year}</FormError>
                
                <CreditSection>
                    <CreditList 
                        cols="12 6"
                        billingCycle={bcContext.bcToUpdate}
                        readOnly={props.readOnly}
                        formikValues={formik.values}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                </CreditSection>
            </BoxBody>
            <BoxFooter>
                <SubmitButton disabled={formik.isSubmitting}
                    type="submit"
                    className={props.submitClass}
                >
                        {props.submitLabel}
                </SubmitButton>
                <BtnDanger type="button" onClick={() => bcContext.init?.()}>Cancelar</BtnDanger>
            </BoxFooter>
        </BCForm>
    )
}