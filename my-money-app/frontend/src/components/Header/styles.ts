import styled from "styled-components"

export const HeaderBar = styled.header`
    color: #fff!important;
    background-color: #005b96!important;
    display: flex;
    height: 2.4rem;
`

export const HeaderLogo = styled.div`
    background-color: #03396c!important;
    padding: 0.5rem 0;
    transition: all 1s;
    width: 12rem;
    overflow: hidden;
`

export const HeaderLink = styled.a`
    color: #fff!important;
    text-decoration: none;
    display: flex;
    justify-content: center;
`

export const NavButton = styled.button`
    color: #fff;
    background-color: #005b96;
    border: 0px;
    padding: 0px 0.7rem;
    cursor: pointer;

    &:hover{
        background-color: #03396c;
    }
`