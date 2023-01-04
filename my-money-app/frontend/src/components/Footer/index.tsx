import { CustomFooter } from "./styles"

interface FooterProps{
    className?: string
}

export default function Footer(props: FooterProps){

    return(
        <CustomFooter className={props.className}>
            <strong>
                Copyright &copy; 2022
                <a style={{textDecorationLine: "none"}} href="www.google.com" target='_blank'> Google</a>.
            </strong>
        </CustomFooter>
    )
}