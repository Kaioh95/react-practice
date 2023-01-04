import styled from 'styled-components'

export const UlMenu = styled.ul`
    color: #fff!important;
    background-color: #333!important;

    @media(max-width: 768px){
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        justify-content: space-around;

        & a{
            display: inline;
            padding: 10px;
            margin: 0px;
        }
    }
`