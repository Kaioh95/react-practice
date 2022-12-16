import styled from "styled-components";

export const MenuDiv = styled.div`
    color: #fff;
    background-color: #005b96;
    height: 2.4rem;

    & :hover{
        background-color: #03396c;
    }
`

export const LiHeader = styled.li`
    height: 100%;
    min-width: 160px;
    padding: 0 10px;
`

export const MenuA = styled.a`
    text-decoration: none;
    font-size: small;
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;

    &>span{
        margin-left: 10px;
    }
`

interface imgProps{
    w: string
    h: string
    center?: boolean
}

export const MenuImg = styled.img<imgProps>`
    width: ${(imgProps) => imgProps.w? imgProps.w : "2rem"};
    height: ${(imgProps) => imgProps.h? imgProps.h : "2rem"};
    border-radius: 50%;
    display: ${(imgProps) => imgProps.center? 'block': ''};
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
`
export const MenuUl = styled.ul`
    color: #fff;
    background-color: #005b96;
    list-style-type: none;
    height: 2.4rem;
`
export const DropDownUl = styled.ul`
    z-index: 3;
    position: fixed;
    display: none;
    right: 0;
    top: 2.4rem;
    color: #fff;
    background-color: #005b96;
    list-style-type: none;
    border: 1px solid #fff;
    min-width: 250px;

    &.open{
        display: block
    }
`

export const Li = styled.li`
    margin: 10px 10px;

    & p{
        text-align: center;
    }

    &>img{
        margin-bottom: 15px;
    }
`

export const LiFooter = styled.li`
    background-color: #fff;
    padding: 10px 10px;

    &:hover{
        background-color: #fff;
    }
`

interface btnProps{
    success?: boolean
    warning?: boolean
    danger?: boolean
}

export const Button = styled.button<btnProps>`
    width: 60px;
    height: 25px;
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    color: #555;
    background-color: ${(btnProps) => 
        (btnProps.success ? "#008000" 
            : btnProps.warning? "#ffa500"
            : btnProps.danger? "#ff0000"
            : "#eee")};

    &:hover{
        background-color: ${(btnProps) => 
            (btnProps.success ? "#00C000" 
                : btnProps.warning? "#ffd500" 
                : btnProps.danger? "#8f0000"
                : "#bbb")};
    }
`