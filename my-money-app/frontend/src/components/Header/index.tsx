import { useRef, useContext } from 'react'
import { HeaderBar, HeaderLogo, HeaderLink, NavButton, HeaderContent } from "./styles"
import { LayoutContext } from '../../contexts/LayoutContext'
import "./styles.css"
import LoginArea from '../LoginArea'

const logoMini = <span><b>My</b>M</span>

const logoLg = <span>
    <i className="fa fa-money"></i>
    <b> My</b> Money
</span>

export default function Header(props: any){
    const context = useContext(LayoutContext)
    const { logoSize, changeLogoSize } = context
    const logoRef = useRef<HTMLDivElement>(null)
    //const [ logoSize, setLogoSize ] = useState<boolean>(true)

    function changeLogo(){
        if(logoRef){
            if(logoSize){
                logoRef.current!.style.width = '0'
            }
            else{
                logoRef.current!.style.width = '190px'
            }
            changeLogoSize()
        }
    }

    return(
        <HeaderBar>
            <HeaderLogo ref={logoRef}>
                <HeaderLink href="/#/">
                    {logoSize ? logoLg : logoMini}
                </HeaderLink>
            </HeaderLogo>
            <HeaderContent>
                <NavButton onClick={changeLogo}>
                    <i className="fa fa-bars"></i>
                </NavButton>
                <LoginArea/>
            </HeaderContent>
        </HeaderBar>
    )
}