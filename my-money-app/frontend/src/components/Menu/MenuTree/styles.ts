import styled from 'styled-components'

export const UlTree = styled.ul`
    background-color: #444;
    overflow: hidden;
    transition: all .7s;
`

export const ItemLink = styled.a`
    color: #ccc;
    font-size: 0.7rem;
    text-decoration: none;
    padding: 0.5rem 0px;
    padding-left: 1rem;
    padding-right: 0.5rem;
    display: block!important;

    &:hover{
        color: #fff;
        border-left: 2px solid #005b96;
        background-color: #222;
    }
`