import styled from "styled-components"

export const AsideSideBar = styled.aside`
    background-color: #333!important;
    transition: all 0.5s;
    height: 100%;
    overflow: hidden;
    //width: 190px;
    //flex-wrap: nowrap;
    @media(max-width: 768px){
        width: 100%!important;
        display: flex;
        align-items: center;
    }
`