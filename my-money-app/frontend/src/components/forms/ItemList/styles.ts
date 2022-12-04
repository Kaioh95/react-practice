import styled from "styled-components"

export const ThLeft = styled.th`
    text-align: left;
`

export const Select = styled.select`
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 30px;
`

export const Table = styled.table`
    caption-side: bottom;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 100%;

    & td{
        padding: 4px 2px;
    }
`

export const FieldSet = styled.div`
    padding: 0 8px;
    border: 0;
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

interface btnProps{
    success?: boolean
    warning?: boolean
    danger?: boolean
}

export const Button = styled.button<btnProps>`
    width: 30px;
    height: 30px;
    margin-left: 5px;
    border-radius: 0.2rem;
    border: 0;
    color: #fff;
    background-color: ${(btnProps) => 
        (btnProps.success ? "#008000" 
            : btnProps.warning? "#ffa500"
            : btnProps.danger? "#ff0000"
            : "#ccc")};

    &:hover{
        background-color: ${(btnProps) => 
            (btnProps.success ? "#00C000" 
                : btnProps.warning? "#ffd500" 
                : btnProps.danger? "#8f0000"
                : "#ccc")};
    }
`