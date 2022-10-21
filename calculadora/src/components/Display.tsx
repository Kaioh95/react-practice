import React from "react";
import './Display.css'

interface displayProps{
    value?: string,
}

export default function Display(props: displayProps){

    return(
        <div className="display">{props.value}</div>
    )
}