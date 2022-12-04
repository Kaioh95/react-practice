import { Form } from "formik"
import styled from "styled-components"

export const BCForm = styled(Form)`
    padding: 0;
`

export const BoxBody = styled.div`
    padding: 10px 2px;
`

export const BoxFooter = styled.div`
    padding: 10px 2px;
`

export const BCInput = styled.input`
    background-color: #f0f0f0;
    border: 3px solid #f0f0f0;
    color: #999;
    font-size: 1em;
    border-radius: 5px;
    margin: 5px 0px 5px 0px;
    height: 35px;
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
`

export const SubmitButton = styled.button`
    background-color: #005b96;
    border: 1px solid #005b96;
    color: #fff;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 5px;
    height: 35px;
    padding: 0px 10px;
    cursor: pointer;

    &.primary{
        background-color: #005b96;
        border: 1px solid #005b96;
        &:hover{
            background-color: #03396c;
        }
    }

    &.info{
        background-color: #ffa500;
        border: 1px solid #ffa500;
        &:hover{
            background-color: #ffd500;
        }
    }

    &.danger{
        background-color: #ff0000;
        border: 1px solid #ff0000;
        &:hover{
            background-color: #8f0000;
        }
    }
`;

export const FormError = styled.div`
    font-style: italic;
    font-size: 10pt;
    color: red;
    margin: 0px;
    height: 13pt;

    &.hidden{
        visibility: hidden;
    }
    &.visible{
        visibility: visible;
    }
`;

export const BtnDanger = styled.button`
    background-color: #eee;
    border: 1px solid #ccc;
    color: #555;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 5px;
    height: 35px;
    padding: 0px 10px;
    margin: 0 10px;
    cursor: pointer;

    &:hover{
        background-color: #ddd;
    }
`

export const ItemListSection = styled.section`
    display: flex;
    flex-wrap: wrap;
`