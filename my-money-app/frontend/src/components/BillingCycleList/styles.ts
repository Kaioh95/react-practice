import styled from "styled-components"

export const Table = styled.table`
    width: 100%;
`

export const ThLeft = styled.th`
    text-align: left;
`

export const BtnWarning = styled.button`
    width: 1.55rem;
    height: 1.55rem;
    margin: 5px 5px;
    border-radius: 0.2rem;
    border: 0;
    color: #fff;
    background-color: #ffa500;

    &:hover{
        background-color: #ffd500;
    }
`

export const BtnDanger = styled.button`
    width: 1.55rem;
    height: 1.55rem;
    margin: 5px 5px;
    border-radius: 0.2rem;
    border: 0;
    color: #fff;
    background-color: #ff0000;

    &:hover{
        background-color: #8f0000;
    }
`