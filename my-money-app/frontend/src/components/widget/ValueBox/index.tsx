import Grid from "../../../Layout/Grid"
import { BoxIcon, SmallBox } from "./styles"

interface ValueBoxProps{
    cols: string
    color: string
    value: string
    text: string
    icon: string
}

export default function ValueBox(props: ValueBoxProps){

    return(
        <Grid cols={props.cols}>
            <SmallBox style={{backgroundColor: props.color}}>
                <div className="inner">
                    <h3>{props.value}</h3>
                    <p>{props.text}</p>
                </div>
                <BoxIcon>
                    <i className={`fa fa-${props.icon}`} style={{fontSize: "2.8rem"}}></i>
                </BoxIcon>
            </SmallBox>
        </Grid>
    )
}