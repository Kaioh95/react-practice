import React, { cloneElement } from "react";
import MembroFamilia from "./MembroFamilia";

export default function Familia(props){
    return(
        <div>
            {
                props.children.map((el, i) => {
                    return cloneElement(el, {...props, key: i})
                })
            }
            {/*
                React.Children.map(props.children, (el) => {
                    return cloneElement(el, {...props})
                })
            */}

            {/*React.cloneElement(props.children, {...props})*/}
            
            {/*props.children*/}
            
            {/*
            <MembroFamilia nome="João" sobrenome={props.sobrenome}/>
            <MembroFamilia nome="Maria" {...props}/>
            <MembroFamilia nome="Ana" sobrenome="Silva"/>
            */}
        </div>
    )
}