import styled from "styled-components";

export const BG = styled.div`
    background-color: #eee;
    min-height: 100vh;
    height: 100%;
    color: #555;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>p{
        margin: 20px 0;
        font-size: x-large;
    }
`

export const Card = styled.div`
    padding: 10px 10px;
    box-shadow: 5px 4px 10px #ccc;
    border-radius: 5px;
    width: 300px;
    height: fit-content;
    color: #555;
    font-weight: 500;
    background-color: #ddd;

    &>p{
        text-align: center;
        padding: 10px 0;
    }

    & input{
        margin-top: 12px;
        padding: 0 5px;
    }

    &>span{
        font-size: small;
        color: #005b96;
        cursor: pointer;
    }
`

export const InputIcons = styled.div`
    width: 100%;

    & i{
        position: absolute;
        padding-top: 19px;
        margin-left: 16rem;
    }
`

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

export const SubmitButton = styled.button`
    background-color: #005b96;
    border: 1px solid #005b96;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    border-radius: 5px;
    height: 30px;
    padding: 0px 10px;
    margin: 10px 0;
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