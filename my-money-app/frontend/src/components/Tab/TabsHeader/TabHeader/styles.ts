import styled from "styled-components"

export const TabA = styled.a`
    text-decoration: none;
    color: #444;
`

export const TabLi = styled.li`
    margin-right: 15px;
    font-size: 15px;
    border: 0px solid rgb(118, 118, 118);
    border-radius: 0px;
    //background-color: #fff;
    //padding: 2px 5px;

    &:hover{
        & a{
            color: #aaa;
        }
    }

    &.active{
        font-weight: bold;
        border-bottom: 2px solid #005b96;
    }
`

export const TabButtonSelected = styled.button`
    font-weight: bold;
    border-bottom: 3px solid #2062ed;
`