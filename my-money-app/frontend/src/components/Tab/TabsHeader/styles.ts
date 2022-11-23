import styled from "styled-components"

export const UlTabs = styled.ul`
    list-style-type: none;
    display: flex;
`

export const TabButton = styled.button`
    margin-right: 15px;
    font-size: 15px;
    background-color: #fff;
    border: 0px solid rgb(118, 118, 118);
    border-radius: 0px;
    padding: 2px 5px;

    & .selected{
        font-weight: bold;
        background-color: #aaa;
        border-bottom: 3px solid #2062ed;
        background-color: #fff;
    }
`

export const TabButtonSelected = styled.button`
    font-weight: bold;
    background-color: #aaa;
    border-bottom: 3px solid #2062ed;
    background-color: #fff;
`