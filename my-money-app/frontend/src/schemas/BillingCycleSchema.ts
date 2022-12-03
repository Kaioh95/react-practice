import * as yup from "yup"

export const BillingCycleSchema = yup.object().shape({
    name: yup.string().min(3).required("Required"),
    month: yup.number().min(1).max(12).required("Required"),
    year: yup.number().min(1970).max(2500).required("Required"),
    credits: yup.array().of(yup.object().shape({
        name: yup.string().min(3).required("Required"),
        value: yup.number().min(0).required("Required")
    })),
    debts: yup.array().of(yup.object().shape({
        name: yup.string().min(3).required("Required"),
        value: yup.number().min(0).required("Required"),
        status: yup.string().required("Required")
    })),
})