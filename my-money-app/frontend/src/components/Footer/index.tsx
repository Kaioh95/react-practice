import { CustomFooter } from "./styles"

export default function Footer(){

    return(
        <CustomFooter>
            <strong>
                Copyright &copy; 2022
                <a style={{textDecorationLine: "none"}} href="www.google.com" target='_blank'> Google</a>.
            </strong>
        </CustomFooter>
    )
}