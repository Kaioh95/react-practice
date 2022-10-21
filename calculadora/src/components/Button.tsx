import React from 'react'
import './Button.css'

interface buttonProps{
    label?: string,
    operation?: boolean,
    double?: boolean,
    triple?: boolean,
    click?: Function,
}

export default function Button(props: buttonProps){
    let classes = 'button '
    classes += props.operation? 'operation': ''
    classes += props.double? 'double': ''
    classes += props.triple? 'triple': ''


    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}