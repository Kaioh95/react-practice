import { connect, ErrorMessage, Field, FieldArray, FieldArrayRenderProps } from "formik";
import Grid from "../../../Layout/Grid";
import Input from "../Input";
import { Button, FieldSet, FormError, ThLeft } from "./styles";

interface ItemListProps{
    cols: string
    field: string
    legend: string
    showStatus?: boolean
    readOnly?: boolean
    formik?: any
}

const ItemList = (props: ItemListProps) => {
    const rows = props.formik?.values?.[`${props.field}`]?.length > 0
        ? props.formik?.values?.[`${props.field}`] : [{}]
    
    /*function add(index: number, item:{[key: string]: string}={}){
        if(!props.readOnly){
            console.log(index, item)
        }
    }
    */

    function renderRows(arrHelp: FieldArrayRenderProps){
        return rows.map((item: {[key: string]: string}, index: number) => (
            <tr key={index}>
                <td>
                    <Field 
                        type="string"
                        as={Input}
                        name={`${props.field}[${index}].name`}
                        readOnly={props.readOnly}
                        placeholder={item.name || 'Insert name'}/>
                    <ErrorMessage name={`${props.field}[${index}].name`} component={FormError}/>
                </td>
                <td>
                    <Field 
                        type="number"
                        as={Input}
                        name={`${props.field}[${index}].value`}
                        readOnly={props.readOnly}
                        placeholder={item.value || 'Insert value'}/>
                    <ErrorMessage name={`${props.field}[${index}].value`} component={FormError}/>
                </td>
                {props.showStatus &&
                    <td>
                        <Field 
                            type="string"
                            as={Input}
                            name={`${props.field}[${index}].status`}
                            readOnly={props.readOnly}
                            placeholder={item.value || 'Insert status'}/>
                        <ErrorMessage name={`${props.field}[${index}].status`} component={FormError}/>
                    </td>
                }
                <td style={{width: "120px", minWidth: "120px"}}>
                    <Button success type="button" 
                        onClick={() => !props.readOnly ? arrHelp.insert(index+1, '') : ''}>
                        <i className="fa fa-plus"></i>
                    </Button>
                    <Button warning type="button" 
                        onClick={() => !props.readOnly ? arrHelp.insert(index+1, {...item, _id:''}) : ''}>
                        <i className="fa fa-clone"></i>
                    </Button>
                    <Button danger type="button" 
                        onClick={() => !props.readOnly ? arrHelp.remove(index): ''}>
                        <i className="fa fa-trash-o"></i>
                    </Button>
                </td>
            </tr>
        ))
    }

    return(
        <Grid cols={props.cols}>
            <FieldSet>
            <FieldArray name={props.field}
                render={arrayHelpers => (
                    <>
                    <legend style={{fontSize: "25px"}}>{props.legend}</legend>
                    <hr/>
                    <table>
                        <thead>
                            <tr>
                                <ThLeft>Nome</ThLeft>
                                <ThLeft>Valor</ThLeft>
                                {props.showStatus && <ThLeft>Status</ThLeft>}
                                <ThLeft>Ações</ThLeft>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows(arrayHelpers)}
                        </tbody>
                    </table>
                    </>
                )}/>
            </FieldSet>
        </Grid>
    )
}

export default connect(ItemList)