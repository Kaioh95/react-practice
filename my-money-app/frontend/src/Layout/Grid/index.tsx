import React, { Component, ReactNode } from "react";
import "./grid.css"

type Props = {
    cols: string
    children: ReactNode
}

export function toCssClasses(numbers: string){
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if(cols[0]) classes += `col-${cols[0]}`
    if(cols[1]) classes += ` col-sm-${cols[1]}`
    if(cols[2]) classes += ` col-md-${cols[2]}`
    if(cols[3]) classes += ` col-lg-${cols[3]}`

    return classes
}

export default class Grid extends Component<Props>{

    render(): React.ReactNode {
        const gridClasses = toCssClasses(this.props.cols || '12')

        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
} 