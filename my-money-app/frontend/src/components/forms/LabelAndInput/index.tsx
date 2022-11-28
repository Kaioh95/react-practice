import { ChangeEventHandler, FocusEventHandler } from "react";
import { FormInput } from "./styles";

interface LabelAndInputProps{
    name: string
    type: string
    placeholder: string
    value: string
    readOnly?: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
}

export default function LabelAndInput(props: LabelAndInputProps){

    return(
        <>
            <label htmlFor={props.name}>
                {props.name.charAt(0).toUpperCase()+props.name.slice(1)}
            </label>
            <FormInput id={props.name} type={props.type} 
                    readOnly={props.readOnly}
                    name={props.name} placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}/>
        </>
    )
}