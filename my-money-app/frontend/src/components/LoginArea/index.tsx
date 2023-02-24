import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, DropDownUl, Li, LiFooter, LiHeader, MenuA, MenuDiv, MenuImg, MenuUl } from "./style";

export default function LoginArea(){
    const authContext = useContext(AuthContext)
    const {user, logout} = authContext

    const [open, setOpen] = useState<boolean>(false)

    const changeOpen = () => {
        if(open)
            setOpen(false)
        else 
            setOpen(true)
    }

    return(
        <MenuDiv>
            <MenuUl>
                <LiHeader onMouseLeave={() => changeOpen()}>
                    <MenuA onClick={() => changeOpen()}>
                        <MenuImg w='25px' h='25px' src="https://picsum.photos/200" alt="User Image"></MenuImg>
                        <span>{user.email}</span>
                    </MenuA>
                    <DropDownUl className={open? 'open' : ''}>
                        <Li>
                            <MenuImg center w='80px' h='80px' src="https://picsum.photos/200" alt="User Image"></MenuImg>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </Li>
                        <LiFooter>
                            <Button onClick={() => logout()}>Log Out</Button>
                        </LiFooter>
                    </DropDownUl>
                </LiHeader>
            </MenuUl>
        </MenuDiv>
    )
}