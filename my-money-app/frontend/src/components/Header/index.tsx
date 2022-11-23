import { useRef, useContext } from 'react'
import { HeaderBar, HeaderLogo, HeaderLink, NavButton } from "./styles"
import { LayoutContext } from '../../contexts/LayoutContext'
import "./styles.css"

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
                logoRef.current!.style.width = '3rem'
            }
            else{
                logoRef.current!.style.width = '12rem'
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
            <NavButton onClick={changeLogo}>
                <i className="fa fa-bars"></i>
            </NavButton>
        </HeaderBar>
    )
}