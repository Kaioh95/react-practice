import { Component, ReactNode } from "react";

type GridProps = {
    cols: string
    children: ReactNode
}

export default class Grid extends Component<GridProps, any> {

    toCssClasses(numbers: string){
        const cols = numbers ? numbers.split(" ") : []
        let classes = ''

        if(cols[0]) {
            if(cols[0] === '12')
                classes += `w-full`
            else
                classes += `w-${cols[0]}/12`
        }
        if(cols[1]) {
            if(cols[1] === '12')
                classes += ` sm:w-full`
            else
                classes += ` sm:w-${cols[1]}/12`
        }
        if(cols[2]) classes += ` md:w-${cols[2]}/12`
        if(cols[3]) classes += ` lg:w-${cols[3]}/12`

        return classes
    }

    render(): ReactNode {
        const gridClasses = this.toCssClasses(this.props.cols || '12')
 
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}