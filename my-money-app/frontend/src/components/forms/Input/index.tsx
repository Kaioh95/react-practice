import { ChangeEventHandler, FocusEventHandler } from "react";
import { FormInput } from "./styles";

interface InputProps{
    id?: string
    name: string
    type: string
    placeholder: string
    value: string
    readOnly?: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
}

export default function Input(props: InputProps){

    return(
        <FormInput id={props?.id} type={props.type} 
                readOnly={props.readOnly}
                name={props.name} placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}/>
    )
}